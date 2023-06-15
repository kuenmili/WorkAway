const { User } = require('../../models/User');
const { Reserve } = require('../../models/Reserve');
const { Review } = require('../../models/Review')

const updateUser = async (id, user) => {

    const reserve = await Reserve.findById(user.reserve_id);
    const review = await Review.findById(user.review_id);

    const newUserInfo = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        cellphone_number: user.cellphone_number,
        profile_image: user.profile_image,
    }

    const updatedUser = await User.findByIdAndUpdate(id, newUserInfo, { new: true });
    updateUser.reserve_id = [...updateUser.reserve_id, reserve._id],
    updateUser.reviews= [...updateUser.reviews, review._id];
    
    return updatedUser;
};

module.exports = updateUser;