const { CoworkSpace } = require('../../models/CoworkSpace');

const getAllCoworkSpaces = async () => {
  let allCoworkSpaces = await CoworkSpace.find()


    allCoworkSpaces.map((cowork) => {
        cowork.score = cowork.reviews.reduce((acc, review) => acc + review.score, 0) / cowork.reviews.length;
        return cowork;
    })
    return allCoworkSpaces;
}


const getCoworkSpacesBySearch = async (name, score, location, services, price) => {
 
    const [gte, lte] = price.split('-');
   
    
    // we need to fix reviews model to use score filter

    const filters = {};

    if (name) filters.name = { $regex: name, $options: 'i' };
    if (location) filters.location = { $regex: location, $options: 'i' };
    if (services) filters.services = { $regex: services, $options: 'i' };
    if (price) filters.price = { $lte: parseInt(lte), $gte: parseInt(gte) };

  let coworkSpaceByName = await CoworkSpace.find(filters)
  .populate("reviews", "score")

  coworkSpaceByName = coworkSpaceByName.map((cowork) => {
    let newCowork = cowork.toObject();

        newCowork.score = newCowork.reviews.length ? newCowork.reviews.reduce((acc, review) => {
            return acc + review.score
        }, 0) / newCowork.reviews.length || 1 : 0;
        
        return newCowork;
    });

    if (score) {
        coworkSpaceByName = coworkSpaceByName.filter((cowork) => cowork.score === parseInt(score));
    }

    return coworkSpaceByName;
}

const getCoworkSpaceByID = async (id) => {
  let coworkSpaceByID = await CoworkSpace.findById(id)
  .populate({
    path: "reviews",
    select: "score comment",
    populate: {
        path: "user_id",
        select: "first_name last_name profile_image"
       }
    });


    
    if (!coworkSpaceByID) throw new Error("cowork space not found");

    return coworkSpaceByID;
}


const getCoworkSpaceWithReserve = async (id) => {
  let coworkSpaceWithReserve = await CoworkSpace.findById(id)
  .populate("reviews")
  .populate("reserves")

  if (!coworkSpaceWithReserve) throw new Error("cowork space not found")

  return coworkSpaceWithReserve
}

module.exports = {
  getAllCoworkSpaces,
  getCoworkSpacesBySearch,
  getCoworkSpaceByID,
  getCoworkSpaceWithReserve,
};
