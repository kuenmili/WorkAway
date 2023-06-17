const { Room } = require('../../models/Room');

const deleteRoom = async (id) => {
    const deletedRoom = await Room.findByIdAndDelete(id, { new: true });
    return deletedRoom;
};

module.exports = deleteRoom;