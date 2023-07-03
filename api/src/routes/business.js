const router = require('express').Router();
const passport = require('passport');
const {
    getAllBusiness,
    getBusinessByName,
    getBusinessByID,
    createBusiness,
    modifyBusinessPassword,
    deleteBusiness,
} = require("../controllers/business");
const { isAdmin, isAdminMiddleware } = require('../middlewares/auth');

//This route will retrieve all business in DB
router.get('/', async (req,res) => {
    try {
        const allBusiness = await getAllBusiness()
        res.status(200).json(allBusiness)
    } catch (error) {
        console.log("ERROR", error);
        res.status(500).json(error)
    }
});

//This route will retrieve a business in DB searched by name
router.get('/search', async (req, res) => {
    const { name } = req.query
    try {
            const businessByName = await getBusinessByName(name)
            res.status(200).json(businessByName)
    } catch (error) {
        res.status(500).json(error)
    }
});

//This route will retrieve a business in DB searched by ID
router.get('/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { id } = req.params
    try {
        const businessByID = await getBusinessByID(id)
        res.status(200).json(businessByID)
    } catch (error) {
        res.status(404).json(error)
    }
});

//This route will create a business in our DB
router.post('/', async (req, res) => {
    try {
        const { businessToCreate } = req.body;
        const businessCreated = await createBusiness(businessToCreate)
        res.status(201).json(businessCreated)
    } catch (error) {
        console.log("BUSINESS ERROR: ", error);
        res.status(400).json(error)
    }
});

//This route will modify a business in our DB
router.put('/:id', isAdmin, async (req, res) => {
    const { id } = req.params;
    const { actualPassword, newPassword } = req.body
    try {
        const businessModified = await modifyBusinessPassword(id, actualPassword, newPassword)
        res.status(202).json(businessModified)
    } catch (error) {
        res.status(406).json(error)
    }
});


//This route will delete a business in our DB
router.delete('/:id', isAdmin, async (req, res) => {
    const { id } = req.params
    try {
        const businessDeleted = await deleteBusiness(id)
        res.status(202).json(businessDeleted)
    } catch (error) {
        res.status(400).json(error)
    } 
});

module.exports = router;
