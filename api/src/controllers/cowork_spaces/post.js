const { Business } = require('../../models/Business');
const { CoworkSpace } = require('../../models/CoworkSpace');

const createSpaceCowork = async ({ location, address,business, name, price, about, services, images, review }) => {
    const coworkSpaceCreated = await CoworkSpace.create({
        location,
        address,
        business,
        name,
        about,
        services,
        images,
        review,
        price
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
