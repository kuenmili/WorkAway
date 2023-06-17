const updateRoom = require('../controllers/Room/put');
const deleteRoom = require('../controllers/Room/delete');
const createRoom = require('../controllers/Room/post');
const {
    getById,
    getAllRooms,
} = require('../controllers/Room/get');

const updateRoomHandler = async (req, res) => {
    const { id } = req.params;
    const room = req.body;
    try {
        const updatedRoom = await updateRoom(id, room);
        res.json(updatedRoom);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteRoomHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRoom = await deleteRoom(id);
        res.json(deletedRoom);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createRoomHandler = async (req, res) => {   
    const {
        price,
        cowork_id,
        capacity,
        image,
        description,
    } = req.body; 
    try {
        const room = await createRoom({
            price,
            cowork_id,
            capacity,
            image,
            description,
        });
        res.status(201).json('Room successfully created!');
    } catch (error) {     
        console.log(error);   
        res.status(400).send({ error : error.message })
    }
};

const getByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {       
        const room = await getById(id);
        res.status(200).json(room);
    } catch (error) {       
        res.status(400).json({ error: error.message });
    }
};

const getAllRoomsHandler = async (req, res) => {
    try {
        const rooms = await getAllRooms();
        res.json(rooms);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    updateRoomHandler,
    createRoomHandler,
    getByIdHandler,
    getAllRoomsHandler,
    deleteRoomHandler
}