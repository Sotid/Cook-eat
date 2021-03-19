const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// pending to require recipe model

// USER SCHEMA
const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  favorites: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
    default: [],
  },
  myRecipes: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
    default: [],
  },
  myReviews: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
    default: [],
  },
  imageURL: {
    type: String,
    default: "https://i.postimg.cc/wM25TjGC/unknown.png",
  },
});

// CREATE MODEL
const User = mongoose.model("User", userSchema);

module.exports = User;
