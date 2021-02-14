const express = require("express");
const recipesRouter = express.Router();
const Recipe = require("../models/recipe-model");
const User = require("../models/user-model");
const bodyParser = require("body-parser");

//Get recipes pages
recipesRouter.get("/", function (req, res, next) {
  Recipe.find().then((allRecipes) => {
    const data = {
      allRecipes: allRecipes,
    };
    res.render("recipes", data);
  });
});

// GET /RECIPES[?q=str] - Main view random recipes and search result

// GET /RECIPES/:id renders details of chosen recipe

recipesRouter.get("/:recipeId", function (req, res, next) {
  const { recipeId } = req.params;
  Recipe.findById(recipeId).then((oneRecipe) => {
    res.render("details", { oneRecipe: oneRecipe });
  });
});
module.exports = recipesRouter;
