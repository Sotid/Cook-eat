var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET /RECIPES[?q=str] - Main view random recipes and search result


// GET /RECIPES/:id renders details of chosen recipe






module.exports = router;
