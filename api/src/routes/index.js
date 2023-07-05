const { Router } = require("express");
const userRouter = require("./user");
const businessRouter = require("./business");
const coworkSpaceRouter = require("./cowork_space");
const reserveRouter = require("./reserve");
const roomRouter = require("./room");
const reviewRouter = require("./review");
const paymentsRouter = require("./payment");
const authRouter = require("./auth");
const mailingRouter = require("./chatMail");

const router = Router();

router.use("/business", businessRouter);
router.use("/cowork_spaces", coworkSpaceRouter);
router.use("/reserves", reserveRouter);
router.use("/users", userRouter);
router.use("/rooms", roomRouter);
router.use("/reviews", reviewRouter);
router.use("/payments", paymentsRouter);
router.use("/auth", authRouter);
router.use("/send-email", mailingRouter);

module.exports = router;
