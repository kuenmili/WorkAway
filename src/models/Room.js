const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const schemaRoom = new Schema({
    cowork_id: {
        type: Schema.Types.ObjectId,
        ref: 'CoworkSpace'
    },
    capacity:Number,
    image:String,
    description:String,
})

schemaRoom.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject._v
    }
})

const Room = model('Room', schemaRoom)

module.exports = {
    schemaRoom,
     Room
    };