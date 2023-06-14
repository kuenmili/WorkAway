
const createUser = require('../controllers/User/userPost')

const createUserHandler = async (req, res) => {   
    const {
        first_name,
        last_name,
        email,
        password,
        cellphone_number,
        profile_image,
    } = req.body; 
    
    try {
        const user = await createUser({
            first_name,
            last_name,
            email,
            password,
            cellphone_number,
            profile_image,
        });
        
        res.status(201).json('User successfully created!');
    } catch (error) {     
        console.log(error);   
        res.status(400).send({ error : error.message })
    }
};

module.exports = {
    createUserHandler
}