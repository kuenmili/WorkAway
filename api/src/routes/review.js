const reviewRouter = require("express").Router();

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

reviewRouter.post("/post", async (req, res) => {
    const {
        user_id,
        score,
        comment,
    } = req.body;
    try {        
        const review = await createReview({
            user_id,
            score,
            comment,
        });

        res.status(201).json('Review successfully created!');
    } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message })
    }
});

reviewRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const review = req.body;
    try {
        const updatedReview = await updateReview(id, review);
        res.json(updatedReview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

reviewRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedReview = await deleteReview(id);
        res.json(deletedReview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = reviewRouter;
