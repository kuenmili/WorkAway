const { CoworkSpace } = require("../../models/CoworkSpace");
const { Reserve } = require("../../models/Reserve");
const { User } = require("../../models/User");

const cretedReserve = async ({
  date_from,
  date_to,
  occupants,
  coworkspace,
  user,
}) => {
  console.log("date_from:", date_from);
  console.log("date_to:", date_to);
  console.log("occupants:", occupants);
  console.log("cowork_space:", coworkspace);
  console.log("user:", user);

  const reserveCreated = await Reserve.create({
    date_from,
    date_to,
    occupants,
    user,
    cowork_space: coworkspace,
  });

  await CoworkSpace.findByIdAndUpdate(
    coworkspace,
    {
      $push: {
        reserves: reserveCreated._id,
      },
    },
    { new: true }
  );

  await User.findByIdAndUpdate(
    user,
    {
      $push: {
        reserve_id: reserveCreated._id,
      },
    },
    { new: true }
  );

  return reserveCreated;
};

module.exports = {
  cretedReserve,
};
