const mongoose = require('mongoose')
const { model, Schema } = mongoose;

const schemaBusiness = new Schema({
    name:String,
    cuit:Number,
    email:String,
    password:String,
    address:String,
    spaceCowork_id:String,
});

const Busines = model('Busines', schemaBusiness)

module.exports = { schemaBusiness,
                    Busines,
                    }