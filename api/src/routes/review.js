const passport = require('passport');
const reviewRouter = require("express").Router();
const updateReview = require('../controllers/review/put');
const deleteReview = require('../controllers/review/delete');
const createReview = require('../controllers/review/post');
const {
    getById,
    getAllReviews,
} = require('../controllers/review/get');

reviewRouter.get("/", async (req, res) => {
    try {
        const reviews = await getAllReviews();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

reviewRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const review = await getById(id);
        res.status(200).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

reviewRouter.post("/post", passport.authenticate("jwt", { session: false }),  async (req, res) => {
    const {
        user_id,
        score,
        comment,
        coworkspace
    } = req.body;
    try {        
        const review = await createReview({
            user_id,
            score,
            comment,
            coworkspace
        });

        res.status(201).json('Review successfully created!');
    } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message })
    }
});

reviewRouter.put("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { id } = req.params;
    const review = req.body;
    try {
        const updatedReview = await updateReview(id, review);
        res.json(updatedReview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

reviewRouter.delete("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { id } = req.params;
    try {
        const deletedReview = await deleteReview(id);
        res.json(deletedReview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = reviewRouter;
