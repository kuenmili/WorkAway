const { User } = require('../../models/User');

const deleteUser = async (uid) => {
    console.log(uid, ' esto es delete');
    const deletedUser = await User.findOneAndDelete(uid);
    console.log('borrado');
    return deletedUser;
};

module.exports = deleteUser;
