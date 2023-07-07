const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 5 },
  lastName: { type: String, required: true, minlength: 5 },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  address1: { type: String, required: true },
  address2: String,
  state: String,
  city: String,
  country: String,
  zipCode: { type: Number, required: true },
});

module.exports = mongoose.model("User", userSchema);
