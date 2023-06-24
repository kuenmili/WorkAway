const { Review } = require('../../models/Review');
const { User } = require('../../models/User');
const { CoworkSpace } = require('../../models/CoworkSpace')

const createReview = async ( 
    {
        user_id,
        score,
        comment,
        coworkspace
    }) => {
        
        const user = await User.findById(user_id);
       
        const review =  new Review({
            user_id: user.id,
            score,
            comment,
            cowork_space: coworkspace,
        });   
        
        const savedReview = await review.save();

        user.reviews = [...user.reviews, review._id];
        user.save();

        await CoworkSpace.findByIdAndUpdate(
            coworkspace,
            {
                $push: {
                    reviews: review.id,
                }
            },
            { new: true }
        );
    

        return savedReview;
};

module.exports = createReview;
