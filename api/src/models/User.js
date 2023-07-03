const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const schemaUser = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  cellphone_number: String,
  profile_image: String,
  reserve_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reserve",
      autopopulate: true
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
      autopopulate: true
    },
  ],
});
schemaUser.plugin(require('mongoose-autopopulate'))
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