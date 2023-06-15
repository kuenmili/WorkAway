const { Room } = require('../../models/Room');

const getById = async (id) => {   
    
    if (!id) throw new Error(`Id required`);

    const room = await Room.findById(id);    
    
    if (!room) return;   
    
    return { ...room.toJSON()};
};

const getAllRooms = async () => {
    const rooms = await Room.find({});
    return rooms;
};

module.exports = {
    getAllRooms,
    getById
};