const { Review } = require('../../models/Review');
const { User } = require('../../models/User');

const createReview = async ( 
    {
      //  user_id,
        score,
        comment,
    }) => {

        const user = await User.findById(user_id);
       
        const review =  new Review({
        //    user_id: user.toJSON()._id,
            score,
            comment,
        });   
        
        const savedReview = await review.save();

        return savedReview;
};

module.exports = createReview;