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
        ref: "Review",
        autopopulate: true
    }],
    reserves: [{
        type:Schema.Types.ObjectId,
        ref: "Reserve",
        autopopulate: true
    }]
});


schemaReview.plugin(require('mongoose-autopopulate'))
schemaReview.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const CoworkSpace = model('CoworkSpace', schemaSpaceCowork)

module.exports = {
    schemaSpaceCowork,  
    CoworkSpace,
};
