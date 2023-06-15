const { User } = require('../../models/User');

const updateUser = async (id, user) => {

    const newUserInfo = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        cellphone_number: user.cellphone_number,
        profile_image: user.profile_image,
        reserve_id: [user.reserve_id]
    }

    const updatedUser = await User.findByIdAndUpdate(id, newUserInfo, { new: true });

    return updatedUser;
};

module.exports = updateUser;