const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// First property model takes is the connection name
const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
