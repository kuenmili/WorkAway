const { Review } = require('../../models/Review');

const deleteReview = async (id) => {
    
    const deletedReview = await Review.findByIdAndDelete(id, { new: true });
    return deletedReview;
};

module.exports = deleteReview;