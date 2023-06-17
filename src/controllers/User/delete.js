const { User } = require('../../models/User');

const deleteUser = async (id) => {
    const deletedUser = await User.findByIdAndDelete(id, { new: true });
    return deletedUser;
};

module.exports = deleteUser;