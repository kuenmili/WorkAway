const { User } = require('../../models/User');
const { Reserve } = require('../../models/Reserve');
const { Review } = require('../../models/Review')

const updateUser = async (id, user) => {

    const {
        username,
        first_name,
        last_name,
        email,
        password,
        cellphone_number,
        profile_image,
        reserve_id,
        review_id,
    } = user
    
    const reserve =  await Reserve.findById(user.reserve_id);
    const review =  await Review.findById(user.review_id);
    
    const newUserInfo = {
        username,
        first_name,
        last_name,
        email,
        password,
        cellphone_number,
        profile_image,
        reserve_id: reserve ? [...reserve_id, reserve._id] : [],
        review_id: review ? [...review_id, review._id] : [],
    }

    const updatedUser = await User.findByIdAndUpdate(id, newUserInfo, { new: true });
    
    if (review) {
        review.user_id = updateUser._id;
        review.save();
    };
    if (reserve) {
        reserve.user_id = updateUser._id;
        reserve.save();
    };
    
    return updatedUser;
};

module.exports = updateUser;