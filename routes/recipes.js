const express = require("express");
const recipesRouter = express.Router();
const Recipe = require("../models/recipe-model");

//Get recipes pages
recipesRouter.get("/", function (req, res, next) {
    Recipe.find()
      .then((allRecipes) => {
        const data = {
          allRecipes: allRecipes
        }
        res.render('recipes', data);
      })
  })

// GET /RECIPES[?q=str] - Main view random recipes and search result

// GET /RECIPES/:id renders details of chosen recipe

recipesRouter.get("/:id", function (req, res, next) {
  res.render("details");
});

module.exports = recipesRouter;
