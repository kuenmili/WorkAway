const userRouter = require("express").Router();
const createUser = require('../controllers/user/post');
const {
    getById,
    getAllUsers,
} = require('../controllers/user/get');
const updateUser = require('../controllers/user/put');
const deleteUser = require('../controllers/user/delete');

userRouter.get('/', async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

userRouter.get('/:uid', async (req, res) => {
    const { uid } = req.params;
    try {       
        const user = await getById(uid);
        res.status(200).json(user);
    } catch (error) {       
        res.status(400).json({ error: error.message });
    }
});

userRouter.post('/signup', async (req, res) => {   
    const {
        uid,
        first_name,
        last_name,
        email,
        password,
        cellphone_number,
        profile_image,
    } = req.body; 
    
    try {
        const user = await createUser({
            uid,
            first_name,
            last_name,
            email,
            password,
            cellphone_number,
            profile_image,
        });
        console.log(user, "user creado");
        res.status(201).json('User successfully created!');
        
    } catch (error) {     
        console.log(error.message);   
        res.status(400).send({ error : error.message })
    }
});

userRouter.put('/:uid', async (req, res) => {
    const { uid } = req.params;
    const user = req.body;
    
    try {
        const updatedUser = await updateUser(uid, user);
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

userRouter.delete('/:uid', async (req, res) => {
    const { uid } = req.params;
    try {
        const deletedUser = await deleteUser(uid);
        res.json(deletedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = userRouter;
