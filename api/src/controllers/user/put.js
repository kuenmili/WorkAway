const { User } = require('../../models/User');
const { Reserve } = require('../../models/Reserve');
const { Review } = require('../../models/Review')

const updateUser = async (id, user) => {

    const {
        uid,
        first_name,
        last_name,
        email,
        password,
        cellphone_number,
        profile_image,
        reserve_id,
        review_id,
    } = user
    
    const reserve =  await Reserve.findOne(user.reserve_id);
    const review =  await Review.findOne(user.review_id);
    
    const newUserInfo = {
        first_name,
        last_name,
        email,
        password,
        cellphone_number,
        profile_image,
        reserve_id: reserve ? [...reserve_id, reserve.uid] : [],
        review_id: review ? [...review_id, review.uid] : [],
    }

    const updatedUser = await User.findOneAndUpdate(uid, newUserInfo, { new: true });
    
    if (review) {
        review.user_id = updateUser.uid;
        review.save();
    };
    if (reserve) {
        reserve.user_id = updateUser.uid;
        reserve.save();
    };
    
    return updatedUser;
};

module.exports = updateUser;
