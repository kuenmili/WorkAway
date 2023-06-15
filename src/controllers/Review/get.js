const { Review } = require('../../models/Review');

const getById = async (id) => {   
    
    if (!id) throw new Error(`Id required`);

    const review = await Review.findById(id);    
    
    if (!review) return;   
    
    return { ...review.toJSON()};
};

const getAllReviews = async () => {
    const review = await Review.find({});
    return review;
};

module.exports = {
    getAllReviews,
    getById
};