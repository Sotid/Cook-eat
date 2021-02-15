const express = require("express");
const recipesRouter = express.Router();
const Recipe = require("../models/recipe-model");
const User = require("../models/user-model");
const bodyParser = require("body-parser");

//GET / renders main view with a list of recipes in DB

recipesRouter.get("/", function (req, res, next) {
  Recipe.find().then((allRecipes) => {
    const data = {
      allRecipes: allRecipes,
    };
    res.render("recipes", data);
  });
});

// GET /RECIPES[?q=str] - Main view random recipes and search result.
// STILL TO FIGURE OUT: RENDER NEW RECIPES WITH THE SEARCH RESULTS

recipesRouter.get("/show?");

// GET /RECIPES/:id renders details view of chosen recipe

recipesRouter.get("/:recipeId", function (req, res, next) {
  const { recipeId } = req.params;

  Recipe.findById(recipeId).then((oneRecipe) => {
    res.render("details", { oneRecipe: oneRecipe });
  });
});

// POST /RECIPES/:id posts a review in a recipe. Renders same page with updated reviews

recipesRouter.post("/:recipeId", function (req, res, next) {
  const { recipeId } = req.params;
  const reviews = req.body.review;

  Recipe.findByIdAndUpdate(
    recipeId,
    { $push: { reviews: reviews } },
    { new: true }
  ).then((recipeReviews) => {
    res.redirect(`/recipes/${recipeId}`);
  });
});

module.exports = recipesRouter;
