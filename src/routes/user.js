const userRouter = require("express").Router();
const {
    createUserHandler,
    getByIdHandler,
    getAllUsersHandler,
    updateUserHandler,
    deleteUserHandler,
} = require('../handlers/userHandler');

userRouter.post('/signup', createUserHandler);
userRouter.delete('/:id', deleteUserHandler);
userRouter.put('/:id', updateUserHandler);
userRouter.get('/', getAllUsersHandler);
userRouter.get('/:id', getByIdHandler);


module.exports = userRouter;