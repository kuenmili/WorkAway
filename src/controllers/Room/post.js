const { Room } = require('../../models/Room');
const { CoworkSpace } = require('../../models/Cowork-space');

const createRoom = async ( 
    {
        price,
        cowork_id,
        capacity,
        image,
        description,
    }) => {

        const cowork = await CoworkSpace.findById(cowork_id);

        const room =  new Room({
            price,
            cowork: cowork._id,
            capacity,
            image,
            description,
        });   
        
        const savedRoom = await room.save();

        cowork.rooms = [...cowork.rooms, savedRoom];
        cowork.save();
        
        return savedRoom;
};

module.exports = createRoom;