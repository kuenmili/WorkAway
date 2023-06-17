const { CoworkSpace } = require('../../models/Cowork-space');

const getAllCoworkSpaces = async () => {
    const allCoworkSpaces = await CoworkSpace.find()
        .populate("rooms");
    return allCoworkSpaces;
}

const getCoworkSpacesByName = async (name) =>{
    const coworkSpaceByName = await CoworkSpace.find({
        name: {
            $regex: name,
            $options: 'i'
        }
    }).populate("rooms");

    return coworkSpaceByName;
}

const getCoworkSpaceByID = async (id) => {
    const coworkSpaceByID = await CoworkSpace.findById(id)
        .populate("rooms");

    if (!coworkSpaceByID) throw new Error("cowork space not found");

    return coworkSpaceByID;
}

module.exports = {
    getAllCoworkSpaces,
    getCoworkSpacesByName,
    getCoworkSpaceByID,
}
