var express = require("express");
var recipesRouter = express.Router();

//Get recipes pages
recipesRouter.get("/", function (req, res, next) {
  res.render("recipes");
});

// GET /RECIPES[?q=str] - Main view random recipes and search result

// GET /RECIPES/:id renders details of chosen recipe

module.exports = recipesRouter;
