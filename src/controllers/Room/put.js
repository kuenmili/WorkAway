const { Room } = require('../../models/Room');

const updateRoom = async (id, room) => {

    const newRoomInfo = {
        cowork_id: room.coworkId,
        capacity: room.capacity,
        image: room.image,
        description: room.description,
    }

    const updatedRoom = await Room.findByIdAndUpdate(id, newRoomInfo, { new: true });

    return updatedRoom;
};

module.exports = updateRoom;