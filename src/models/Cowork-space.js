const mongoose = require('mongoose')
const { model, Schema } = mongoose;

const schemaSpaceCowork = new Schema({
    business_id:String,
    name:String,
    price:Number,
    about:String,
    Services:String,
    images:String,
});

const CoworkSpace = model('CoworkSpace', schemaSpaceCowork)

module.exports = {
                    schemaSpaceCowork,  
                    CoworkSpace,
                };