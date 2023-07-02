const { User } = require('../../models/User');

const getById = async (uid) => {
    console.log(uid)  
    
    if (!uid) throw new Error(`Id required`);

    const user = await User.findOne({uid})     
    
    return user
};

const getAllUsers = async () => {
    const users = await User.find({})
    return users;
};


module.exports = {
    getAllUsers,
    getById
};
