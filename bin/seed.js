const mongoose = require("mongoose");
const Recipe = require("../models/recipe-model");
require("dotenv").config();










mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    .then((x) => {
 
    const pr = x.connection.dropDatabase();
    return pr;
  })
  .then(() => {
   
    const pr = Recipe.create(recipes);
    return pr;
  })
    .then((createdRecipes) => {
      mongoose.connection.close();
  })
  .catch( (err) => console.log('Error connection to the DB', err));