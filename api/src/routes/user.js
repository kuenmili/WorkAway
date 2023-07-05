const passport = require('passport');
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

userRouter.get('/:id', passport.authenticate("jwt", { session: false }),  async (req, res) => {
    const { id } = req.params;
    try {       
        const user = await getById(id);
        res.status(200).json(user);
    } catch (error) {       
        res.status(400).json({ error: error.message });
    }
});

userRouter.post('/signup', async (req, res) => {   
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
        console.log(user);
        res.status(201).json('User successfully created!');
        
    } catch (error) {     
        console.log(error.message);   
        res.status(400).send({ error : error.message })
    }
});

userRouter.put('/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { id } = req.params;
    const user = req.body;
    console.log(user);
    
    try {
        const updatedUser = await updateUser(id, user);
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

userRouter.delete('/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await deleteUser(id);
        res.json(deletedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = userRouter;
