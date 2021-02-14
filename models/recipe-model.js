const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// RECIPE SCHEMA
const recipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [
    {
      name: { type: String, required: true },
      quantity: String,
      type: {
        type: String,
        required: true,
        enum: [
          "Meat",
          "Fish",
          "Condiments",
          "Drinks",
          "Vegetables",
          "Cereals and legumes",
          "Flours",
          "Rice and pasta",
          "Soups and Creams",
          "Dairy",
          "Fruits",
        ],
      },
    },
  ],
  instructions: { type: String, required: true },
  imageURL: {
    type: String,
    default:
      "https://previews.123rf.com/images/andegro4ka/andegro4ka1309/andegro4ka130900033/22192339-food-ingredients-and-blank-paper-for-recipes-cooking-background.jpg",
  },
  reviews: [
    {
      comments: String,
      rating: Number,
    },
  ],
});

// CREATE MODEL

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
