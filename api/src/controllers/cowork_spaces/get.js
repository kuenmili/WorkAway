const { CoworkSpace } = require('../../models/CoworkSpace');

const getAllCoworkSpaces = async () => {
    const allCoworkSpaces = await CoworkSpace.find()

    return allCoworkSpaces;
}


const getCoworkSpacesBySearch = async (name, score, location, capacity, services, price) => {
    const [gte, lte] = price.split('-');
    // we need to fix reviews model to use score filter

    const filters = {};
    
    if (name) filters.name = { $regex: name, $options: 'i' };
    if (location) filters.location = { $regex: location, $options: 'i' };
   
    if (services) filters.services = { $in: [services] };
    if (price) filters.price = { $lte: parseInt(lte), $gte: parseInt(gte) };
    console.log(filters)
    const coworkSpaceByName = await CoworkSpace.find(filters)


    return coworkSpaceByName;
}

const getCoworkSpaceByID = async (id) => {
    const coworkSpaceByID = await CoworkSpace.findById(id)


    if (!coworkSpaceByID) throw new Error("cowork space not found");

    return coworkSpaceByID;
}

module.exports = {
    getAllCoworkSpaces,
    getCoworkSpacesBySearch,
    getCoworkSpaceByID,
}
