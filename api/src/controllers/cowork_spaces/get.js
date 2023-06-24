const { CoworkSpace } = require('../../models/CoworkSpace');

const getAllCoworkSpaces = async () => {
    const allCoworkSpaces = await CoworkSpace.find()

    return allCoworkSpaces;
}

const getCoworkSpacesByName = async (name) =>{
    const coworkSpaceByName = await CoworkSpace.find({
        name: {
            $regex: name,
            $options: 'i'
        }
    })

    return coworkSpaceByName;
}

const getCoworkSpaceByID = async (id) => {
    const coworkSpaceByID = await CoworkSpace.findById(id)


    if (!coworkSpaceByID) throw new Error("cowork space not found");

    return coworkSpaceByID;
}

module.exports = {
    getAllCoworkSpaces,
    getCoworkSpacesByName,
    getCoworkSpaceByID,
}
