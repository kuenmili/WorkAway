const { Room } = require('../../models/Room');
const { CoworkSpace } = require('../../models/Cowork-space');

const createRoom = async ( 
    {
        cowork,
        capacity,
        image,
        description,
    }) => {       
       
        const room =  new Room({
            cowork: cowork._id,
            capacity,
            image,
            description,
        });   
        
        const savedRoom = await room.save();

        return savedRoom;
};

module.exports = createRoom;