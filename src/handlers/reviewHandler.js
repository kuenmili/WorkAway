const updateReview = require('../controllers/Review/put');
const deleteReview = require('../controllers/Review/delete');
const createReview = require('../controllers/Review/post');
const {
    getById,
    getAllReviews,
} = require('../controllers/Review/get');

const updateReviewHandler = async (req, res) => {
    const { id } = req.params;
    const review = req.body;
    try {
        const updatedReview = await updateReview(id, review);
        res.json(updatedReview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteReviewHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedReview = await deleteReview(id);
        res.json(deletedReview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createReviewHandler = async (req, res) => {
    const {
      //  user_id,
        score,
        comment,
    } = req.body;
    try {
        console.log(score, comment);
        const review = await createReview({
       //     user_id,
            score,
            comment,
        });

        res.status(201).json('Review successfully created!');
    } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message })
    }
};

const getByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await getById(id);
        res.status(200).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllReviewsHandler = async (req, res) => {
    try {
        const reviews = await getAllReviews();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports = {
    updateReviewHandler,
    deleteReviewHandler,
    createReviewHandler,
    getByIdHandler,
    getAllReviewsHandler,
}

