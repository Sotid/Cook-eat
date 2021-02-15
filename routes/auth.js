const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user-model");
const zxcvbn = require("zxcvbn");

const saltRounds = 10;

//GET / - renders login view

authRouter.get("/", function (req, res, next) {
  res.render("auth-views/login-form", { layout: false });
});

//POST /LOGIN - creates a new session if credentials are correct
//Renders recipes view

authRouter.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  //Checks if credentials are empty
  if (username === "" || password === "") {
    res.render("auth-views/login-form", {
      layout: false,
      errorMessage: "Don't be a stranger! Please identify yourself",
    });

    return;
  }

  //Checks if username exists in DB
  User.findOne({ username })
    .then((user) => {
      if (!user) {
        res.render("auth-views/login-form", {
          layout: false,
          errorMessage: "Don't be a stranger! Please identify yourself",
        });

        return;
      }

      //Checks password
      const passwordCorrect = bcrypt.compareSync(password, user.password);
      if (passwordCorrect) {
        req.session.currentUser = user;
        res.redirect("/recipes");
      } else {
        res.render("auth-views/login-form", {
          layout: false,
          errorMessage: "Don't be a stranger! Please identify yourself",
        });
      }
    })
    .catch((err) => next(err));
});

// GET /SIGNUP renders signup form view

authRouter.get("/signup", (req, res, next) => {
  res.render("auth-views/signup-form", { layout: false });
});

//POST /SIGNUP creates new user

authRouter.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body;

  //Checks if credentials are empty
  if (username === "" || password === "" || email === "") {
    res.render("auth-views/signup-form", {
      layout: false,
      errorMessage: "Don't be a stranger! Please identify yourself",
    });

    return;
  }

  // Checks if the username already exists
  User.findOne({ username })
    .then((user) => {
      if (user !== null) {
        res.render("auth-views/signup-form", {
          layout: false,
          errorMessage: "Don't be a stranger! Please identify yourself",
        });

        return;
      }

      //Hash password
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // Creates new user in database and cookie. Automatically logs in user
      User.create({ username, email, password: hashedPassword })
        .then((newUser) => {
          req.session.currentUser = user;
          res.redirect("/recipes");
        })
        .catch((err) => {
          console.log(err);
          res.render("auth-views/signup-form", {
            layout: false,
            errorMessage: "Don't be a stranger! Please identify yourself",
          });
        });
    })
    .catch((err) => next(err));
});

//GET /LOGOUT destroys current session. Redirects to login view

authRouter.get("/logout", (req, res, next) => {
  req.session.destroy(function (err) {
    if (err) {
      next(err);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = authRouter;
