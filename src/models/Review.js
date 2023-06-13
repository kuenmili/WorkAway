const mongoose = require('mongoose')
const { model, Schema } = mongoose;

const schemaReview = new Schema({
user_name:String,
score:Number,
comment:String,
});

const Review = model('Review', schemaReview)

module.exports = {
                schemaReview,
                Review
}