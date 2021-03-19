const express = require("express");
const recipesRouter = express.Router();
const Recipe = require("../models/recipe-model");
const User = require("../models/user-model");
const bodyParser = require("body-parser");


//GET /show renders main view with a list of recipes in DB
recipesRouter.get("/show", function (req, res, next) {
  Recipe.aggregate([{ $sample: { size: 9 } }]).then((allRecipes) => {
    const data = {
      allRecipes: allRecipes,
    };
    res.render("recipes", data);
  });
});
// GET /RECIPES[?q=str] - Render search results.
recipesRouter.get("/", function (req, res, next) {
  const searchIngredient = req.query.search;
  console.log(searchIngredient);
  if (req.query.search) {
    const searchIngredient = req.query.search.split(", ");
    Recipe.find({ "ingredients.name": { $all: searchIngredient } }).then(
      (found) => {
        const data = {
          found: found,
        };
        res.render("search", data);
      }
    );
  }
});
// GET /RECIPES/:id renders details view of chosen recipe
recipesRouter.get("/:recipeId", function (req, res, next) {
  const { recipeId } = req.params;
  Recipe.findById(recipeId).then((oneRecipe) => {
    res.render("details", {
      oneRecipe: oneRecipe,
      user: req.session.currentUser,
    });
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