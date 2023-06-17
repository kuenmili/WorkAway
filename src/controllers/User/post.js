const { User } = require('../../models/User');

const createUser = async ( 
    { 
        username,
        first_name,
        last_name,
        email,
        password,
        cellphone_number,
        profile_image,
     } ) => {
       
    const user =  new User({
        username,
        first_name,
        last_name,
        email,
        password,
        cellphone_number,
        profile_image,
    });   
    
    const savedUser = await user.save();

    return savedUser;
};

module.exports = createUser;