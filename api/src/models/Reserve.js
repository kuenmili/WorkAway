const mongoose = require('mongoose')
const { model, Schema } = mongoose;

const schemaReserve = new Schema({
    date: {
        type: Date,
        required: true,
    },
    duration: {
        type: String,
        enum: ["full-day", "half-day"],
        required: true,
    },
    time_slot: {
        type: String,
        enum: ["morning", "afternoon"],
        required: true,
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

const Reserve = model('Reserve', schemaReserve)

module.exports = {
    schemaReserve,
    Reserve,
};
