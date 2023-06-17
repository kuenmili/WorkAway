
const createUser = require('../controllers/User/post');
const {
    getById,
    getAllUsers,
} = require('../controllers/User/get');
const updateUser = require('../controllers/User/put');
const deleteUser = require('../controllers/User/delete');

const createUserHandler = async (req, res) => {   
    const {
        username,
        first_name,
        last_name,
        email,
        password,
        cellphone_number,
        profile_image,
    } = req.body; 
    
    try {
        const user = await createUser({
            username,
            first_name,
            last_name,
            email,
            password,
            cellphone_number,
            profile_image,
        });
        console.log(user);
        res.status(201).json('User successfully created!');
        
    } catch (error) {     
        console.log(error);   
        res.status(400).send({ error : error.message })
    }
};

const getByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {       
        const user = await getById(id);
        res.status(200).json(user);
    } catch (error) {       
        res.status(400).json({ error: error.message });
    }
};

const getAllUsersHandler = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateUserHandler = async (req, res) => {
    const { id } = req.params;
    const user = req.body;
    try {
        const updatedUser = await updateUser(id, user);
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteUserHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await deleteUser(id);
        res.json(deletedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createUserHandler,
    getByIdHandler,
    getAllUsersHandler,
    updateUserHandler,
    deleteUserHandler
}