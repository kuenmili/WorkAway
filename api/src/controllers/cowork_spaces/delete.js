const { CoworkSpace } = require('../../models/Cowork-space');

const deleteCoworkSpace = async id => {
    const coworkSpaceDeleted = await CoworkSpace.findByIdAndDelete({
        _id: id,
    });

    if (!coworkSpaceDeleted) throw new Error("cowork space not found");

    return coworkSpaceDeleted;
}

module.exports = {
    deleteCoworkSpace,
}
