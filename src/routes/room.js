const roomRouter = require("express").Router();
const {
    createRoomHandler,
    getByIdHandler,
    getAllRoomsHandler,
    updateRoomHandler,
    deleteRoomHandler,
} = require('../handlers/roomHandler');

roomRouter.delete('/:id', deleteRoomHandler);
roomRouter.put('/:id', updateRoomHandler);
roomRouter.post('/', createRoomHandler);
roomRouter.get('/', getAllRoomsHandler);
roomRouter.get('/:id', getByIdHandler);

module.exports = roomRouter;