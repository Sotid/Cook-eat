var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET /RECIPES - Main view random recipes

// GET /RECIPES renders search result

// GET /RECIPES/:id renders details of chosen recipe

// POST /RECIPED/:id adds new review and renders the same page (updated)





module.exports = router;
