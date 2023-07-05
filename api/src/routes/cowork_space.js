const passport = require('passport');
const router = require('express').Router();
const {
    getAllCoworkSpaces,
    getCoworkSpacesBySearch,
    getCoworkSpaceByID,
    getCoworkSpaceWithReserve,
    createSpaceCowork,
    modifyCoworkSpace,
    modifyCoworkSpacePrice,
    deleteCoworkSpace,
} = require("../controllers/cowork_spaces");
const { isAdmin, isAdminMiddleware } = require('../middlewares/auth');

//This route will retrieve all cowork spaces in DB
router.get('/', async (req,res) => {
    try {
        const allCoworkSpaces = await getAllCoworkSpaces();
        res.status(200).json(allCoworkSpaces);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
});

//This route will retrieve a cowork space in DB searched by name
router.get('/search', async (req, res) => {
    const { name, score, location, services, price } = req.query;
    try {
        const coworkSpaceByName = await getCoworkSpacesBySearch(name, score, location, services, price);
        res.status(200).json(coworkSpaceByName);
    } catch (error) {
        console.log("DATA: ", error)
        res.status(500).json(error);
    }
});

//This route will retrieve a cpwprk space in DB searched by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const coworkSpaceByID = await getCoworkSpaceByID(id);
        res.status(200).json(coworkSpaceByID);
    } catch (error) {
        res.status(404).json(error);
    }
});

router.get('/:id/detail', passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { id } = req.params;
    try {
        const coworkWithReserve = await getCoworkSpaceWithReserve(id);
        res.status(202).json(coworkWithReserve);
    } catch (error) {
        console.log("ACA ES EL ERROR", error)
        res.status(500).json(error);
    }
} )

//This route will create a cowork space in our DB
router.post('/', passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { coworkSpaceToCreate } = req.body;
    try {
        const spaceCoworkCreated = await createSpaceCowork(coworkSpaceToCreate);
        res.status(201).json(spaceCoworkCreated);
    } catch (error) {
        res.status(400).json(error);
    }
});

//This route will modify a cowork space in our DB
router.put('/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { id } = req.params;
    const { name, about, services, images } = req.body;
    try {
        const coworkSpaceModified = await modifyCoworkSpace(id, name, about, services, images);
        res.status(202).json(coworkSpaceModified);
    } catch (error) {
        res.status(406).json(error);
    }
});

router.put('/:id/price', passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { id } = req.params;
    const { price } = req.body;
    try {
        const coworkSpaceModified = await modifyCoworkSpacePrice(id, price);
        res.status(202).json(coworkSpaceModified);
    } catch (error) {
       
        res.status(406).json(error);
    }
});

//This route will delete a cowork space in our DB
router.delete('/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { id } = req.params
    try {
        const coworkSpaceDeleted = await deleteCoworkSpace(id);
        res.status(202).json(coworkSpaceDeleted);
    } catch (error) {
        console.log("ACA ES EL Error", error)
        res.status(400).json(error);
    } 
});

module.exports = router;
