const mongoose = require("mongoose");
const Recipe = require("../models/recipe-model");
require("dotenv").config();

const recipes = [
  {
    name: "Crock Pot Roast",
    ingredients: [
        {
            quantity: 1,
            name: "beef",
            type: "Meat",
        },
        {
            quantity: "1 package",
            name: "brown gravy mix",
            type: "Condiments",
        },
        {
            quantity: "1 package",
            name: "dried Italian salad dressing mix",
            type: "Condiments",
        },
        {
            quantity: "1 package",
            name: "dry ranch dressing mix",
            type: "Condiments",
        },
        {
            quantity: "1/2 cup",
            name: "water",
            type: "Drinks",
        }
    ],
    instructions:
        "Place beef roast in crock pot.Mix the dried mixes together in a bowl and sprinkle over the roast.Pour the water around the roast.Cook on low for 7-9 hours.",
    imageURL: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
   
},
{
  name: "Roasted Asparagus",
  ingredients: [
      {
          quantity: "1 lb",
          name:  "asparagus",
          type: "Vegetables",
      },
      {
          quantity: "1 1/2 tbsp",
          name: "olive oil",
          type: "Condiments",
      },
      {
          quantity: "1/2 tsp",
          name: "kosher salt",
          type: "Condiments",
      }
  ],
  instructions:
      "Preheat oven to 425°F.Cut off the woody bottom part of the asparagus spears and discard. With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears.Place asparagus on foil-lined baking sheet and drizzle with olive oil.Sprinkle with salt.With your hands, roll the asparagus around until they are evenly coated with oil and salt.Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.They should be tender when pierced with the tip of a knife.The tips of the spears will get very brown but watch them to prevent burning.They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal.",

  imageURL: "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg",
  
}

]




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