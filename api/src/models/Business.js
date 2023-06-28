const mongoose = require("mongoose");
const { model, Schema } = mongoose;


const schemaBusiness = new Schema({
    name:String,
    cuit:Number,
    cellphone_number:String,
    email:String,
    password:String,
    address:String,
    cowork_spaces: [{


        type: Schema.Types.ObjectId,
        ref: "CoworkSpace",
      },
    ],
  },
  {
    strictPopulate: false,
  }
);

const Business = model("Business", schemaBusiness);

module.exports = {
  schemaBusiness,
  Business,
};
