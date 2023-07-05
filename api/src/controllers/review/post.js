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
      console.log(user_id);  
        const user = await User.findById(user_id);
       
        // const review =  new Review({
        //     user_id,
        //     score,
        //     comment,
        //     cowork_space: coworkspace,
        // });   
        
        // const savedReview = await review.save();

        const review = await Review.create({
            user_id,
            score,
            comment,
            cowork_space: coworkspace,
        });

        // user.review_id = [...user.review_id, review.id];
        // user.save();

        await User.findByIdAndUpdate(
            user_id,
            {
                $push: {
                    reserve_id: review._id,
                }
            },
            { new: true }
        );

        await CoworkSpace.findByIdAndUpdate(
            coworkspace,
            {
                $push: {
                    reviews: review.id,
                }
            },
            { new: true }
        );
    
        return review;
};

module.exports = createReview;
