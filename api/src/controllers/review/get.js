const { Review } = require('../../models/Review');

const getById = async (id) => {   
    
    if (!id) throw new Error(`Id required`);

    const review = await Review.findById(id).populate('user_id');    
    
    if (!review) return;   
    
    return { ...review.toJSON()};
};

const getAllReviews = async () => {
    const review = await Review.find({}).populate("user_id");
    return review;
};

module.exports = {
    getAllReviews,
    getById
};
