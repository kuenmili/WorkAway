const { Review } = require('../../models/Review');

const updateReview = async (id, review) => {

    const { 
        score,
        comment,
    } = review;

    const newReviewInfo = {
        score,
        comment,
    };

    const updatedReview = await Review.findByIdAndUpdate(id, newReviewInfo, { new: true });

    return updatedReview;
};

module.exports = updateReview;
