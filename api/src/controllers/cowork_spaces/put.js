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

module.exports = {
    modifyCoworkSpace,
}
