const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const bcrypt = require("bcrypt");


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

schemaBusiness.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

schemaBusiness.methods.isValidPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const Business = model("Business", schemaBusiness);

module.exports = {
  schemaBusiness,
  Business,
};
