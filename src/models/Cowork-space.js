const mongoose = require('mongoose')
const { model, Schema } = mongoose;

const schemaSpaceCowork = new Schema({
    business: {
        type: Schema.Types.ObjectId,
        ref: "Business"
    },
    name: {
        type: String,
        required: true,
    },
    about: String,
    services: [String],
    images: [String],
    rooms: [{
        type: Schema.Types.ObjectId,
        ref: 'Room',
    }]
}, {
    strictPopulate: false,
});

const CoworkSpace = model('CoworkSpace', schemaSpaceCowork)

module.exports = {
    schemaSpaceCowork,  
    CoworkSpace,
};
