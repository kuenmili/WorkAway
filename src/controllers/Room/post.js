const { Room } = require('../../models/Room');
const { CoworkSpace } = require('../../models/Cowork-space');

const createRoom = async ( 
    {
        cowork_id,
        capacity,
        image,
        description,
    }) => {

        const coworkSpace = await CoworkSpace.findById(cowork_id);
       
        const room =  new Room({
            cowork_id: coworkSpace._id,
            capacity,
            image,
            description,
        });   
        
        const savedRoom = await room.save();

        return savedRoom;
};

module.exports = createRoom;