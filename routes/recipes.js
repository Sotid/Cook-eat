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

// GET/RECIPES  ADDS A FAVORITE TO USERS FAVS ARRAY
// recipesRouter.get("/", (req, res, next) => {
//   let thisUser = req.session.currentUser._id;
//   let recipeId = req.params.id;
//   Recipe.findById(recipeId)
//     .then((thisRecipe) => {
//       User.findByIdAndUpdate(
//         thisUser,
//         { $push: { favorites: thisRecipe._id } },
//         { new: true }
//       )
//         //.populate("ingredients.quantity"["0"])
//         .then((thisUser) => {
//           res.redirect(`/recipes`);
//           res.render("favorites");
//         });
//     })
//     .catch((err) => console.log(err));
// });
// GET /RECIPES[?q=str] - Main view random recipes and search result

// GET /RECIPES/:id renders details of chosen recipe

recipesRouter.get("/:recipeId", function (req, res, next) {
  const { recipeId } = req.params;

  console.log(recipeId, "hola")

  Recipe.findById(recipeId).then((oneRecipe) => {
    res.render("details", { oneRecipe: oneRecipe });
  });
});

// POST /RECIPES/:id posts a review in a recipes' id

recipesRouter.post("/:recipeId", function (req, res, next) {
  const { recipeId } = req.params;
  const reviews = req.body.review;


console.log(recipeId, "hello")



  Recipe.findByIdAndUpdate(
    recipeId,
    { $push: { reviews: reviews } },
    { new: true }
  ).then((recipeReviews) => {
    res.redirect(`/recipes/${recipeId}`);
  });
});




   




module.exports = recipesRouter;
