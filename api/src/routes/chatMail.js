const router = require('express').Router();
const postChatQuery = require('../controllers/chatbot/post');

router.post('/', async (req, res) => {
    const  data  = req.body;
    console.log(data);
    try {
        const chatquery = await postChatQuery(data);
        res.status(200).json(chatquery);
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message)
    }

});

module.exports = router;