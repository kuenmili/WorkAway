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
    
    const newUserInfo = {
        first_name,
        last_name,
        email,
        password,
        cellphone_number,
        profile_image,
        reserve_id:  [...reserve_id],
        review_id:  [...review_id] 
    }

    const updatedUser = await User.findByIdAndUpdate(id, newUserInfo, { new: true });
    
    return updatedUser;
};

module.exports = updateUser;
