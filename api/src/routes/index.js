const { Router } = require('express');
const userRouter  = require('./user');
const businessRouter = require("./business");
const coworkSpaceRouter = require("./cowork_space");
const reserveRouter = require("./reserve");

const router = Router();

router.use('/users', userRouter);
router.use("/business", businessRouter);
router.use("/cowork_spaces", coworkSpaceRouter);
router.use("/reserve", reserveRouter);

module.exports = router;
