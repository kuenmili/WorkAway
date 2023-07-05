const { Router } = require("express");
const {
  cancelOrderController,
  captureOrderController,
  createOrderController,
} = require("../controllers/payments/paymentsController");

const router = Router();

router.post("/create", createOrderController);

router.get("/cancel", cancelOrderController);

router.get("/capture", captureOrderController);

module.exports = router;
