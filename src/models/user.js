const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: true,
  },

  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
  },

  username: {
    type: String,
    required: [true, "Please enter a password"],
  },
});

const model = mongoose.model("User", UserSchema);

module.exports = model;
