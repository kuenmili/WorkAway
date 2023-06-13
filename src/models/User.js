const mongoose = require('mongoose')
const { model, Schema } = mongoose;

const schemaUser = new Schema({
    first_name:String,
    last_name:String,
    email:String,
    password:String,
    cellphone_number:Number,
    profile_image:String,
})
const User = model('User', schemaUser)

module.exports = schemaUser, User;
