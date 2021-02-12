const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// USER SCHEMA
const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  favorites: [ObjectId],
  myRecipes: [ObjectId],
});

// CREATE MODEL
const User = moongoose.model("User", userSchema);

module.exports = User;
