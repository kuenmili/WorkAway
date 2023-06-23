const mongoose = require('mongoose')
const { model, Schema } = mongoose;

const schemaReview = new Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    score:Number,
    comment:String,
    cowork_space: { 
        type:Schema.Types.ObjectId,
        require: true,
    }
});


schemaReview.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Review = model('Review', schemaReview)

module.exports = {
                schemaReview,
                Review
}
