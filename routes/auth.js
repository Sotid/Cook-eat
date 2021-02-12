const express = require("express");
const authRouter = express.Router();
// const bcrypt = require("bcrypt");
const User = require("../models/user-model");
const zxcvbn = require("zxcvbn");

const saltRounds = 10;

//GET LOGIN

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//POST LOGIN

// GET SIGNUP

//POST SIGNUP

authRouter.get("/signup", (req, res, next) => {
  res.render("auth-views/signup-form");
});

//GET LOGOUT

module.exports = authRouter;
