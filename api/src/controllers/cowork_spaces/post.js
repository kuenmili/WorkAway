const { Business } = require('../../models/Business');
const { CoworkSpace } = require('../../models/CoworkSpace');

const createSpaceCowork = async ({ business, name, price, about, services, images }) => {
    const coworkSpaceCreated = await CoworkSpace.create({
        business,
        name,
        about,
        services,
        images,
    });

    await Business.findByIdAndUpdate(
        business,
        {
            $push: {
                cowork_spaces: coworkSpaceCreated._id,
            }
        },
        { new: true }
    );

    return coworkSpaceCreated;
};

module.exports = {
    createSpaceCowork,
}
