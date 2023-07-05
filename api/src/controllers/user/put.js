const { User } = require('../../models/User');

const updateUser = async (id, user) => {

    const {
        first_name,
        last_name,
        email,
        cellphone_number,
        profile_image,
    } = user

    const updatedUser = await User.findByIdAndUpdate(id, {
        first_name,
        last_name,
        email,
        cellphone_number,
        profile_image,
    });
    
    return updatedUser;
};

module.exports = updateUser;
