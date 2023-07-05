const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const bcrypt = require("bcrypt");

const schemaUser = new Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  cellphone_number: String,
  profile_image: String,
  reserve_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reserve",
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

schemaUser.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

schemaUser.methods.isValidPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

schemaUser.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    //delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

const User = model("User", schemaUser);

module.exports = {
  schemaUser,
  User,
};