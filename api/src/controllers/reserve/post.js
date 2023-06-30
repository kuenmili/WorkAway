const { CoworkSpace } = require("../../models/CoworkSpace");
const { Reserve } = require("../../models/Reserve");


const cretedReserve = async ({ date_from, date_to, occupants, coworkspace, user }) => {
    const reserveCreated = Reserve.create({
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
            }
        },
        { new: true }
    );
    
    return reserveCreated;
}

module.exports = {
    cretedReserve,
}
