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
       
       

        const review = await Review.create({
            user_id,
            score,
            comment,
            cowork_space: coworkspace,
        });

      

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

module.exports=createReview;