const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// RECIPE SCHEMA
const recipeSchema = new Schema({
  name: { type: String },
  ingredients: [
    {
      name: { type: String },
      quantity: String,
      type: {
        type: String,

        enum: [
          "Meat",
          "Fish",
          "Condiments",
          "Drinks",
          "Vegetables",
          "Cereals and Legumes",
          "Flours",
          "Rice and pasta",
          "Soups and Creams",
          "Dairy",
          "Fruits",
        ],
      },
    },
  ],
  instructions: { type: String },
  imageURL: {
    type: String,
    default: "https://i.postimg.cc/Wbv5LdQR/default.jpg",
  },
  reviews: [String],
});

// CREATE MODEL

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
