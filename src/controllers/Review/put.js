const { Review } = require('../../models/Review');

const updateReview = async (id, review) => {

    const newReviewInfo = {
     //   user_id: review.user_id,
        score: review.score,
        comment: review.comment,
    }

    const updatedReview = await Review.findByIdAndUpdate(id, newReviewInfo, { new: true });

    return updatedReview;
};

module.exports = updateReview;