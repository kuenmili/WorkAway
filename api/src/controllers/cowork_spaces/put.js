const { CoworkSpace } = require('../../models/CoworkSpace');

const modifyCoworkSpace = async (id, name, about, services, images) => {
    const coworkSpaceModified = await CoworkSpace.findByIdAndUpdate({
        _id: id,
    }, {
        name,
        about,
        services,
        images,
    });
    
    return coworkSpaceModified;
}

const modifyCoworkSpacePrice = async (id, price) => {
    const coworkSpaceModified = await CoworkSpace.findByIdAndUpdate({
        _id: id,
    }, {
        price: parseInt(price),
    });

    coworkSpaceModified.price = parseInt(price);

    return coworkSpaceModified;
}

module.exports = {
    modifyCoworkSpace,
    modifyCoworkSpacePrice,
}
