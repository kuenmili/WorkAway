const mongoose = require('mongoose')
const { model, Schema } = mongoose;

const schemaReserve = new Schema({
    date_from:Date,
    date_to:Date,
    coworkers:Number,
    room_id:{
        type: Schema.Types.ObjectId,
        ref: 'Room'
    },
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

const Reserve = model('Reserve', schemaReserve)

module.exports = {
                    schemaReserve,
                    Reserve
                }