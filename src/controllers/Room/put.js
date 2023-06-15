const { CoworkSpace } = require('../../models/Cowork-space');
const { Room } = require('../../models/Room');


const updateRoom = async (id, room) => {

    const { coworkId } = room;
    const cowork = await CoworkSpace.findById(coworkId);

    const newRoomInfo = {
        cowork_id: cowork._id,
        capacity: room.capacity,
        image: room.image,
        description: room.description,
    }

    const updatedRoom = await Room.findByIdAndUpdate(id, newRoomInfo, { new: true });

    cowork.rooms = [...cowork.rooms, updatedRoom._id];

    return updatedRoom;
};

module.exports = updateRoom;