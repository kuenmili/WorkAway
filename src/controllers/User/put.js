const { User } = require('../../models/User');
const { Reserve } = require('../../models/Reserve');
const { Review } = require('../../models/Review')

const updateUser = async (id, user) => {

    const {
        first_name,
        last_name,
        email,
        password,
        cellphone_number,
        profile_image,
        reserve_id,
        review_id,
    } = user
    
    const reserve = reserve_id ? await Reserve.findById(user.reserve_id) : [];
    const review = review_id ? await Review.findById(user.review_id) : [];
    
    const newUserInfo = {
        first_name,
        last_name,
        email,
        password,
        cellphone_number,
        profile_image,
        reserve_id: reserve.length > 0 ? reserve._id : [],
        review_id: review.length > 0 ? review._id : [],
    }

    const updatedUser = await User.findByIdAndUpdate(id, newUserInfo, { new: true });
      
    return updatedUser;
};

module.exports = updateUser;