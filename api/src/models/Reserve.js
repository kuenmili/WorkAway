const mongoose = require('mongoose')
const { model, Schema } = mongoose;

const schemaReserve = new Schema({
    date_from: {
        type: Date,
        required: true,
    },
    date_to:{
        type: Date,
        required: true,
    },
    occupants:Number,
    cowork_space: { 
        type:Schema.Types.ObjectId,
        ref: 'CoworkSpace',
        require: true,

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
