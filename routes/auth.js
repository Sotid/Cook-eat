const express = require('express');
const router = express.Router();
const bcrypt = require(`bcrypt`);

const saltRounds= 10;

//GET LOGIN

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});






// GET SIGNUP

//POST SIGNUP



//POST LOGIN

//GET LOGOUT


module.exports = router;
