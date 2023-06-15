const { Review } = require('../../models/Review');
const { User } = require('../../models/User');

const updateReview = async (id, review) => {

    const { user_id } = review;

    const user = await User.findById(user_id);

    const newReviewInfo = {
        user_id: user._id,
        score: review.score,
        comment: review.comment,
    };

    const updatedReview = await Review.findByIdAndUpdate(id, newReviewInfo, { new: true });

    user.reviews = [...user.reviews, updateReview._id]

    return updatedReview;
};

module.exports = updateReview;