const express = require("express");
const privateRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user-model");
const Recipe = require("../models/recipe-model");

const zxcvbn = require("zxcvbn");

//custom middleware
function loggedIn(req, res, next) {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/");
  }
}

//GET /PRIVATE/PROFILE renders personal profile view

privateRouter.get("/myprofile", loggedIn, (req, res, next) => {
  const id = req.session.currentUser._id;
  User.findById(id)
    .then((thisUser) => {
      const data = { thisUser: thisUser };
      res.render("myprofile", data);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

//GET /PRIVATE/MYPROFILE/EDIT renders edit-profile view
privateRouter.get("/myprofile/edit/:id", loggedIn, (req, res, next) => {
  const id = req.session.currentUser._id;
  User.findById(id)
    .then((thisUser) => {
      const data = { thisUser: thisUser };
      res.render("edit-profile", data);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
  
});

//POST /PRIVATE/MYPROFILE/EDIT sends new data to the server. Renders same page updated

privateRouter.post("/myprofile/edit/:id", loggedIn,(req, res, next) => {
  const id = req.session.currentUser._id;
  const { username, email, password, imageURL } = req.body;
   
  User.findByIdAndUpdate(id, { username, email, password, imageURL}, {new:true})
    .then((updated) => {
      res.redirect('/private/myprofile')
    })
    .catch((err) => console.log(err));
});

//GET /PRIVATE/FAVORITES renders favorites and my recipes view

privateRouter.get("/favorites", loggedIn, function (req, res, next) {
  res.render("favorites" );
});

//GET /PRIVATE/FAVORITES/CREATE adds new favorite
privateRouter.get("/favorites/create", loggedIn, function (req, res, next) {

  res.render("create")
  
});

//POST /PRIVATE/FAVORITES/CREATE adds new favorite
privateRouter.post('/favorites/create', (req, res, next) => {
  const {name, imageURL, ingredients, instructions} = req.body;
  Recipe.create({name, imageURL, ingredients, instructions}, {new: true},)
    .then((newRecipe) => {
      res.redirect("recipes"); // TO CHECK AFTER RECIPES/ID ROUTE CREATION
    })
    .catch( (err) => console.log(err));
})

//POST /PRIVATE/FAVORITES/:ID deletes existing favorite recipe

//GET /PRIVATE/MYRECIPES renders myrecipes view

//GET /PRIVATE/MYRECIPES/ADD add new recipe

//POST /PRIVATE/MYRECIPES/ADD renders my recipes updated view

//POST /PRIVATE/MYRECIPES/:ID delete selected myrecipe

// POST PRIVATE/RECIPES/:id adds new review and renders the same page (updated)

module.exports = privateRouter;
