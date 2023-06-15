const { Review } = require('../../models/Review');
const { User } = require('../../models/User');

const createReview = async ( 
    {
        user_id,
        score,
        comment,
    }) => {
        
        const user = await User.findById(user_id);
       
        const review =  new Review({
            user_id: user.id,
            score,
            comment,
        });   
        
        const savedReview = await review.save();

        user.reviews = [...user.reviews, savedReview._id];

        return savedReview;
};

module.exports = createReview;