const { Router } = require('express');
const userRouter  = require('./user');
const businessRouter = require("./business");
const coworkSpaceRouter = require("./cowork_space");
const reserveRouter = require("./reserve");
const roomRouter = require('./room');
const reviewRouter = require('./review');

const router = Router();

router.use("/business", businessRouter);
router.use("/cowork_spaces", coworkSpaceRouter);
router.use("/reserve", reserveRouter);
router.use('/users', userRouter);
router.use('/rooms', roomRouter);
router.use('/reviews', reviewRouter);

module.exports = router;
