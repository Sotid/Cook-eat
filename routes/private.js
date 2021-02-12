var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



//GET /PRIVATE/PROFILE renders personal profile view

//GET /PRIVATE/EDIT-PROFILE renders edit-profile view

//POST /PRIVATE/EDIT-PROFILE sends new data to the server. Renders same page updated



//GET /PRIVATE/FAVORITES renders favorites view

//POST /PRIVATE/FAVORITES adds new favorite

//POST /PRIVATE/FAVORITES/:ID deletes existing favorite recipe



//GET /PRIVATE/MYRECIPES renders myrecipes view

//GET /PRIVATE/MYRECIPES/ADD add new recipe

//POST /PRIVATE/MYRECIPES/ADD renders my recipes updated view

//POST /PRIVATE/MYRECIPES/:ID delete selected myrecipe


// POST PRIVATE/RECIPES/:id adds new review and renders the same page (updated)













module.exports = router;
