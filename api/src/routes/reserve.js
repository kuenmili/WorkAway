const { Router } = require('express');
const router = Router();
const {
    getAllReserves,
    getReservesByDate,
    getReserveByID,
    cretedReserve,
    modifyReserve,
    deleteReserve,
} = require("../controllers/reserve/index")

//This route will retrieve all reserves in DB
router.get('/', async (req,res) => {
    try {
        const allReserves = await getAllReserves();
        res.status(200).json(allReserves);
    } catch (error) {
        res.status(500).json(error);
    }
});

//This route will retrieve a reserves in DB searched by date from at date to.
router.get('/search', async (req, res) => {
    const { date_from, date_to, user_name } = req.query;
    try {
            const reservesByDate = await getReservesByDate(date_from, date_to, user_name);
            res.status(200).json(reservesByDate);
    } catch (error) {
        res.status(500).json(error);
    }
});

//This route will retrieve a reserve in DB searched by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const reserveByID = await getReserveByID(id);
        res.status(200).json(reserveByID);
    } catch (error) {
        res.status(404).json(error);
    }
});

//This route will create a reserve in our DB
router.post('/', async (req, res) => {
    try {
        const { reserveToCreate } = req.body;
        const reserveCreated = await cretedReserve(reserveToCreate);
        res.status(201).json(reserveCreated);
    } catch (error) {
        res.status(400).json(error);
    }
});

//This route will modify a reserve in our DB
router.put('/:id', async (req, res) => {
    const { id } = req.params; 
    const { date_from, date_to, occupants } = req.body;
    try {
        const reserveModified = await modifyReserve(id, date_from, date_to, occupants);
        res.status(202).json(reserveModified);
    } catch (error) {
        res.status(406).json(error);
    }
});

//This route will delete a cowork space in our DB
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const reserveDeleted = await deleteReserve(id);
        res.status(202).json(reserveDeleted);
    } catch (error) {
        res.status(400).json(error);
    } 
});

module.exports = router;
