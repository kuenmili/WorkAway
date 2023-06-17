const reviewRouter = require("express").Router();
const {
    createReviewHandler,
    getAllReviewsHandler,
    getByIdHandler,
    updateReviewHandler,
    deleteReviewHandler,
} = require("../handlers/reviewHandler");

reviewRouter.post("/post", createReviewHandler);
reviewRouter.get("/", getAllReviewsHandler);
reviewRouter.get("/:id", getByIdHandler);
reviewRouter.put("/:id", updateReviewHandler);
reviewRouter.delete("/:id", deleteReviewHandler);

module.exports = reviewRouter;