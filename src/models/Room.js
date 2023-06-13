const mongoose = require('mongoose')
const { model, Schema } = mongoose;

const schemaRoom = new Schema({
    capacity:Number,
    image:String,
    description:String,
})
const Room = model('Room', schemaRoom)

module.exports = schemaRoom, Room;