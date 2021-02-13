const express = require("express");
const privateRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user-model");
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
  res.render("myprofile");
});

//GET /PRIVATE/EDIT-PROFILE renders edit-profile view
privateRouter.get("/myprofile/edit/:id", (req, res, next) => {
  res.render("edit-profile");

  const { id } = req.params;

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

privateRouter.post("/myprofile/edit/:id", (req, res, next) => {
  const data = {
    id: req.params.id,
    username,
    email,
    password,
  };
  User.findByIdAndUpdate(req.params.id, data)
    .then(() => {
      res.redirect("/myprofile");
    })
    .catch((err) => console.log(err));
});
//POST /PRIVATE/EDIT-PROFILE sends new data to the server. Renders same page updated

//GET /PRIVATE/FAVORITES renders favorites view

//POST /PRIVATE/FAVORITES adds new favorite

//POST /PRIVATE/FAVORITES/:ID deletes existing favorite recipe

//GET /PRIVATE/MYRECIPES renders myrecipes view

//GET /PRIVATE/MYRECIPES/ADD add new recipe

//POST /PRIVATE/MYRECIPES/ADD renders my recipes updated view

//POST /PRIVATE/MYRECIPES/:ID delete selected myrecipe

// POST PRIVATE/RECIPES/:id adds new review and renders the same page (updated)

module.exports = privateRouter;
