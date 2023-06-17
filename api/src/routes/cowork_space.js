const router = require('express').Router();
const {
    getAllCoworkSpaces,
    getCoworkSpacesByName,
    getCoworkSpaceByID,
    createSpaceCowork,
    modifyCoworkSpace,
    deleteCoworkSpace,
} = require("../controllers/cowork_spaces");

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
    const { name } = req.query;
    try {
        const coworkSpaceByName = await getCoworkSpacesByName(name);
        res.status(200).json(coworkSpaceByName);
    } catch (error) {
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

//This route will create a cowork space in our DB
router.post('/', async (req, res) => {
    const { coworkSpaceToCreate } = req.body;
    try {
        const spaceCoworkCreated = await createSpaceCowork(coworkSpaceToCreate);
        res.status(201).json(spaceCoworkCreated);
    } catch (error) {
        res.status(400).json(error);
    }
});

//This route will modify a cowork space in our DB
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, about, services, images } = req.body;
    try {
        const coworkSpaceModified = await modifyCoworkSpace(id, name, about, services, images);
        res.status(202).json(coworkSpaceModified);
    } catch (error) {
        res.status(406).json(error);
    }
});

//This route will delete a cowork space in our DB
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const coworkSpaceDeleted = await deleteCoworkSpace(id);
        res.status(202).json(coworkSpaceDeleted);
    } catch (error) {
        res.status(400).json(error);
    } 
});

module.exports = router;
