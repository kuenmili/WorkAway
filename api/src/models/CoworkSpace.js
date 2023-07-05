const mongoose = require('mongoose')
const { model, Schema } = mongoose;

const schemaSpaceCowork = new Schema({
    location: String,
    address: String,
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
    price: Number,
    reviews: [{
        type:Schema.Types.ObjectId,
        ref: "Review"
    }],
    reserves: [{
        type:Schema.Types.ObjectId,
        ref: "Reserve"
    }]
}, {
    strictPopulate: false,
});

const CoworkSpace = model('CoworkSpace', schemaSpaceCowork)

module.exports = {
    schemaSpaceCowork,  
    CoworkSpace,
};
