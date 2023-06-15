const { Router } = require('express');
const userRouter  = require('./user');
const roomRouter = require('./room');
const reviewRouter = require('./review');

const router = Router();

router.use('/users', userRouter);
router.use('/rooms', roomRouter); // hay que revisar el path para que concuerde con cowork space.
router.use('/reviews', reviewRouter);

module.exports = router;