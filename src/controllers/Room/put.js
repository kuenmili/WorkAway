const { CoworkSpace } = require('../../models/Cowork-space');
const { Room } = require('../../models/Room');


const updateRoom = async (id, room) => {

    const { 
        price,
        capacity,
        image,
        description,
        coworkId } = room;
    const cowork = await CoworkSpace.findById(coworkId);

    const newRoomInfo = {
        price,
        cowork_id: cowork._id,
        capacity,
        image,
        description,
    }

    const updatedRoom = await Room.findByIdAndUpdate(id, newRoomInfo, { new: true });

    cowork.rooms = [...cowork.rooms, updatedRoom];
    cowork.save();

    return updatedRoom;
};

module.exports = updateRoom;