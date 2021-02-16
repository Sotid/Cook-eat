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
      },
    ],
    instructions:
      "Place beef roast in crock pot.Mix the dried mixes together in a bowl and sprinkle over the roast.Pour the water around the roast.Cook on low for 7-9 hours.",
    imageURL:
      "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
  },
  {
    name: "Roasted Asparagus",
    ingredients: [
      {
        quantity: "1 lb",
        name: "asparagus",
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
      },
    ],
    instructions:
      "Preheat oven to 425°F.Cut off the woody bottom part of the asparagus spears and discard. With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears.Place asparagus on foil-lined baking sheet and drizzle with olive oil.Sprinkle with salt.With your hands, roll the asparagus around until they are evenly coated with oil and salt.Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.They should be tender when pierced with the tip of a knife.The tips of the spears will get very brown but watch them to prevent burning.They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal.",

    imageURL:
      "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg",
  },

  {
    name: "Giouvarelakia",
    ingredients: [
      {
        quantity: "500 gr",
        name: "beef",
        type: "Meat",
      },
      {
        quantity: "1/4 cup",
        name: "rice",
        type: "Rice and pasta",
      },
      {
        quantity: "1/4 cup",
        name: "parsley",
        type: "Vegetables",
      },
      {
        quantity: 1,
        name: "onion",
        type: "Vegetables",
      },
      {
        quantity: 3,
        name: "egg",
        type: "Dairy",
      },
      {
        quantity: "2 tbsps",
        name: "olive oil",
        type: "Condiments",
      },
      {
        quantity: 1 / 2,
        name: "carrot",
        type: "Vegetables",
      },
      {
        quantity: "3tbsps",
        name: "dill",
        type: "Vegetables",
      },
      {
        quantity: "1 tbsp",
        name: "salt",
        type: "Condiments",
      },
      {
        quantity: "pinch",
        name: "coriander",
        type: "Condiments",
      },
      {
        quantity: "grounded",
        name: "pepper",
        type: "Condiments",
      },
      {
        quantity: "2",
        name: "lemons",
        type: "Vegetables",
      },
    ],
    instructions:
      "To prepare this Greek meatball soup, start by making the meatballs (youvarlakia). Place all the meatball ingredients into a large bowl, knead the mixture squeezing the ingredients with your hand until smooth. Leave the mixture to rest in the fridge for 15 minutes. This will prevent the youvarlakia to break up when boiled. Form the meatballs (youvarlakia) and set them aside.Pour into a large pan 2 ½ cups of water and bring to the boil. Turn the heat down and gently add the meatballs (youvarlakia) in the water, put the lid back on and cook for 20-25 minutes. (The water should be enough to cover the meatballs, so add some more warm water if needed).To prepare the egg lemon sauce for the Greek meatball soup, crack the eggs into a bowl and whisk. Add the lemon juice and whisk well. Add into the bowl a ladle of hot soup and whisk quickly. Add one more ladle and whisk again until combined.Stir in the egg lemon sauce into the youvarlakia soup and cook for 2-3 minutes over medium heat, until warm but not boiling.Serve this extra warming Greek meatball soup, while still hot with a sprinkle of chopped parsley.Make sure that you do not cover any left overs until they have cooled; the sauce may curdle otherwise!",
    imageURL:
      "https://www.mygreekdish.com/wp-content/uploads/2013/10/Traditional-Greek-Meatball-Soup-Giouvarlakia-Youvarlakia-in-Egg-lemon-sauce-recipe-1500x1000.jpg",
  },
  {
    name: "Giouvetsi",
    ingredients: [
      {
        quantity: "1kg",
        name: "beef",
        type: "Meat",
      },
      {
        quantity: 2,
        name: "onions",
        type: "Vegetables",
      },
      {
        quantity: 2,
        name: "carots",
        type: "Vegetables",
      },
      {
        quantity: "5 tbsps",
        name: "tomato sauce",
        type: "Condiments",
      },
      {
        quantity: "1tbsp",
        name: "sugar",
        type: "Condiments",
      },
      {
        quantity: "1 glass",
        name: "red wine",
        type: "Drinks",
      },
      {
        quantity: "5gr",
        name: "cinnamon",
        type: "Condiments",
      },
      {
        quantity: "1/2 cup",
        name: "olive oil",
        type: "Condiments",
      },
      {
        quantity: "250gr",
        name: "orzo pasta",
        type: "Rice and pasta",
      },
      {
        quantity: "100gr grated",
        name: "cheese",
        type: "Dairy",
      },
    ],
    instructions:
      "Wipe the meat with paper towels. Heat 1/2 of a cup of olive oil into a pan, add the chopped onions and carrots and sauté for 5 minutes in medium-low heat. Turn up the heat and add the veal; brown the meat on all sides until crusty.Stir in the tomato puree and pour in the red wine; wait for the wine to evaporate. Add the tinned tomatoes, a glass of water, the sugar, the cinnamon stick and a good pinch of salt and pepper.Turn the heat down and simmer with the lid on for about 45 minutes.In the meantime, heat another pan, add 3 tbsps of olive oil and the orzo pasta and sauté, until golden.Place the orzo pasta in an oven tray along with the meat and sauce (remove the cinnamon stick) and mix. Cover the tray with some aluminum foil and bake in preheated oven at 180C for 30 minutes. Remove the aluminum foil, add a glass of water if needed, and put back in the oven for another 15 minutes. Sprinkle with some grated kefalotyri or any hard yellow cheese and enjoy!",
    imageURL:
      "https://www.mygreekdish.com/wp-content/uploads/2013/05/Giouvetsi-Greek-Beef-stew-with-Orzo-pasta-1536x1391.jpeg",
  },
  {
    name: "Sarmadakia",
    ingredients: [
      {
        quantity: 60,
        name: "grape leaves",
        type: "Vegetables",
      },
      {
        quantity: "500gr",
        name: "beef",
        type: "Meat",
      },
      {
        quantity: 1,
        name: "onion",
        type: "Vegetables",
      },
      {
        quantity: "1/2 cup",
        name: "rice",
        type: "Rice and pasta",
      },
      {
        quantity: "6 tbsps",
        name: "olive oil",
        type: "Condiments",
      },
      {
        quantity: "1/4 cup",
        name: "parsley",
        type: "Vegetables",
      },
      {
        quantity: "1/4 cup",
        name: "mint",
        type: "Vegetables",
      },
      {
        quantity: "4 tsps",
        name: "salt",
        type: "Condiments",
      },
      {
        quantity: "1/2 tsp",
        name: "pepper",
        type: "Condiments",
      },
      {
        quantity: "2 cups",
        name: "chicken broth",
        type: "Soups and Creams",
      },
      {
        quantity: 3,
        name: "eggs",
        type: "Dairy",
      },
      {
        quantity: 1,
        name: "lemon",
        type: "Vegetables",
      },
    ],
    instructions:
      "If using fresh grape leaves, prepare an ice water bath by filling a bowl halfway with ice and water and set aside. Bring a medium pot of water to a rolling boil over high heat, add grape leaves, and cook until leaves are tender but still hold their shape, about 5 to 10 minutes (depending upon the size of the leaves). Remove grape leaves from the water and submerge them in the ice water bath. DrainIf using jarred grape leaves, place leaves in a strainer and discard the liquid. Carefully separate the leaves, rinse with cold water, and let drain.Meanwhile, combine beef, onion, rice, 4 tablespoons of the olive oil, parsley, mint, salt, and pepper in a medium bowl and mix until thoroughly combined.Lay out one grape leaf and remove the tough stem. Place about 1 tablespoon (or less, depending upon the size of the leaf) of filling in the center.Carefully fold the top and sides of the leaf over the filling.Roll tightly into a cylinder (it should look like a miniature football) and place in a large saucepan.Repeat with remaining leaves and filling, arranging sarmadakia side by side until the bottom of the pan is completely covered. Continue layering sarmadakia until they are all in the pan.Place chicken broth in a small saucepan and bring just to a boil over medium-high heat. Pour broth over sarmadakia, along with remaining 2 tablespoons olive oil. Bring to a simmer over medium heat, about 6 minutes. Reduce heat to low and simmer until rice and beef are cooked though, about 20 minutes. Remove sarmadakia to a serving platter. Strain and measure remaining cooking liquid, reserving 1 cup to make the avgolemono sauce. Cover sarmadakia loosely with foil to keep warm. Wipe out the saucepan used to cook the sarmadakia and set aside.In a stand mixer fitted with the whisk attachment, beat eggs on high until they are light yellow and foamy, about 2 minutes.Add lemon juice in a steady stream and continue beating for 1 minute more.Add reserved sarmadakia cooking liquid in a steady stream and whip for 1 minute to incorporate.Pour sauce into the saucepan used to cook the sarmadakia. Heat, whisking constantly, over low heat until sauce is steaming (do not let it come to a boil), about 3 minutes. Season with salt to taste.Discard any liquid that has accumulated on the platter of sarmadakia . Pour sauce over warm sarmadakia or serve on the side.",
    imageURL:
      "https://4.bp.blogspot.com/-Q5LJ6eUMcrc/V6KwtPIK2cI/AAAAAAAAdYY/NaClUWn88BYu1TfXGJTp7GWAu3gFwtYlwCLcB/s1600/%25CE%259D%25CE%25A4%25CE%259F%25CE%259B%25CE%259C.jpg",
  },
  {
    name: "Paella",
    ingredients: [
      {
        quantity: "4 1/2 cups",
        name: "chicken broth",
        type: "Soups and Creams",
      },
      {
        quantity: "1/2 tsp",
        name: "saffron",
        type: "Condiments",
      },
      {
        quantity: "1/4 tsp",
        name: "salt",
        type: "Condiments",
      },
      {
        quantity: "3 tbsps",
        name: "olive oil",
        type: "Condiments",
      },
      {
        quantity: "1",
        name: "onion",
        type: "Vegetables",
      },
      {
        quantity: "1",
        name: "red pepper",
        type: "Vegetables",
      },
      {
        quantity: "3 cloves",
        name: "garlic",
        type: "Vegetables",
      },
      {
        quantity: "3 cups",
        name: "rice",
        type: "Rice and pasta",
      },
      {
        quantity: "1 can",
        name: "tomato sauce",
        type: "Condiments",
      },
      {
        quantity: "1 cup",
        name: "peas",
        type: "Vegetables",
      },
      {
        quantity: "450gr",
        name: "shrimps",
        type: "Fish",
      },
      {
        quantity: "450gr",
        name: "mussels",
        type: "Fish",
      },
      {
        quantity: "450gr",
        name: "clams",
        type: "Fish",
      },
      {
        quantity: "1/4 cup",
        name: "parsley",
        type: "Vegetables",
      },
    ],
    instructions:
      "Heat a gas grill to medium-high heat (375oF), or light a charcoal grill and let burn until the charcoal is covered with gray ash.In a saucepan over medium heat, bring the stock to a boil. Add the saffron and salt. Turn off the heat and let the saffron steep for at least 15 minutes. Taste and add more salt, if needed.In a 12- to 14-inch stainless steel skillet or cast iron pan, heat the oil over medium heat on top of the stove. Add the onion and red pepper, and cook for 5 to 7 minutes, or until the onion is translucent. Stir in the garlic.On a table next to the grill, set the skillet with the sofrito, the rice, tomatoes, infused stock, salt, peas, shrimp, mussels, and clams.Set the skillet with the sofrito on the grill. Add the rice, and cook, stirring often, for 4 to 5 minutes, or until the rice is coated with oil and lightly toasted.Stir in the stock, tomatoes, and peas. Taste for seasoning and add more salt, if you like.Spread the rice evenly over the bottom of the pan. Close the grill cover and simmer the rice without stirring for 15 minutes, or until the rice absorbs most of the stock. If the mixture looks dry, pour about 1 cup of hot water over it, but do not stir.Nestle the mussels and clams into the rice with the hinge sides up so they release their juices into the rice. Arrange the shrimp around the shellfish.Cover the pan with foil, close the grill and cook for 6 to 10 minutes longer (depending on the heat of your grill), or until the rice and shrimp are both cooked through and the mussels and clams are open. (Discard any shellfish that remain tightly shut once everything else is cooked.)Slip a spatula under the rice and check to see if you have achieved the elusive golden brown socarrat. If not, set the pan over the heat, uncovered, for a few minutes to lightly caramelize the bottom.Sprinkle with parsley and bring the whole pan to the table for serving.",
    imageURL:
      "https://tastesbetterfromscratch.com/wp-content/uploads/2020/04/Paella-7.jpg",
  },
  {
    name: "Arancini",
    ingredients: [
      {
        quantity: "2 tbsps",
        name: "olive oil",
        type: "Condiments",
      },
      {
        quantity: "15gr",
        name: "butter",
        type: "Dairy",
      },
      {
        quantity: 1,
        name: "onion",
        type: "Vegetables",
      },
      {
        quantity: 1,
        name: "garlic clove",
        type: "Vegetables",
      },
      {
        quantity: "350gr",
        name: "rice",
        type: "Rice and pasta",
      },
      {
        quantity: "150ml",
        name: "white wine",
        type: "Drinks",
      },
      {
        quantity: "1,2l",
        name: "chicken broth",
        type: "Soups and Creams",
      },
      {
        quantity: "150gr",
        name: "parmesan",
        type: "Dairy",
      },
      {
        quantity: 1,
        name: "lemon",
        type: "Vegetables",
      },
      {
        quantity: "150 gr",
        name: "mozzarella",
        type: "Dairy",
      },
      {
        quantity: "150gr",
        name: "flour",
        type: "Flours",
      },
      {
        quantity: "3",
        name: "eggs",
        type: "Dairy",
      },
      {
        quantity: "150gr",
        name: "breadcrumbs",
        type: "Flours",
      },
    ],
    instructions:
      "Heat the oil and butter in a saucepan until foamy. Add the onion and a pinch of salt and fry gently over a low heat for 15 mins, or until softened and translucent. Add the garlic and cook for another min. Stir in the rice and cook for a further min, then pour in the wine. Bring to the boil and cook until the liquid is reduced by half. Pour in half the stock and simmer, stirring continuously, until most of the liquid is absorbed. Add the remaining stock a ladleful at a time as the rice absorbs the liquid, stirring, until the rice is cooked through (this should take about 20-25 mins). Stir in the parmesan and lemon and season to taste. Spread the risotto out into a lipped tray and leave to cool to room temperature.Scoop the cooled risotto into 18 equal portions – they should be slightly larger than a golf ball. Flatten a risotto ball in your hand and put a piece of the mozzarella in the centre, then enclose the cheese in the rice and roll it into a ball. Repeat with the remaining risotto balls.Put the flour, eggs and breadcrumbs into three separate shallow bowls. Dip each prepared risotto ball into the flour, followed by the eggs and finally, the breadcrumbs. Transfer to a tray and set aside.Half-fill a large, heavy-based saucepan with vegetable oil and heat over medium-low until it reads 170C on a cooking thermometer or until a piece of bread turns golden brown in the oil within 45 seconds. Lower the risotto balls into the oil in batches and cook for 8-10 mins, or until golden brown and melted in the centre. Set aside on a tray lined with a clean kitchen towel.Eat the arancini warm, or serve with a basic tomato sauce for dipping.",
    imageURL:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/arancini_balls-db2b1df.jpg?quality=90&webp=true&resize=440,400",
  },

  {
    name: "Singapore Noodles",
    ingredients: [
      {
        quantity: "3 tbsps",
        name: "teriyaki sauce",
        type: "Condiments",
      },
      {
        quantity: "1/2 tsp",
        name: "five-spice powder",
        type: "Condiments",
      },
      {
        quantity: "2 tbsp",
        name: "curry",
        type: "Condiments",
      },
      {
        quantity: "300gr",
        name: "pork",
        type: "Meat",
      },
      {
        quantity: "140gr",
        name: "noodles",
        type: "Rice and pasta",
      },
      {
        quantity: "2 tbsp",
        name: "curry",
        type: "Condiments",
      },
      {
        quantity: "1 tbsp",
        name: "olive oil",
        type: "Condiments",
      },
      {
        quantity: "600gr",
        name: "mixed stir fry vegetables",
        type: "Vegetables",
      },
      {
        quantity: "100gr",
        name: "shrimps",
        type: "Fish",
      },
    ],
    instructions:
      "Mix the teriyaki sauce, five-spice and curry powders. Add half to the pork, turning to coat, and leave to marinate for 15 mins.Heat oven to 200C/180C fan/ gas 6. Remove pork from the marinade and put on a small baking tray lined with foil. Roast for 15-20 mins.Meanwhile, cook the noodles following pack instructions, but reduce the cooking time by 1 min. Refresh in cold water and drain very well.Transfer the pork to a chopping board and rest for 5 mins. Set a large non-stick frying pan or wok over a medium-high heat. Add the oil and stir-fry the veg for 3-4 mins. Cut the pork in half lengthways, then thinly slice. Tip into the pan, with the shrimps, noodles and remaining marinade. Toss together for 2-3 mins until hot.",
    imageURL:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/singapore_noodles-7d1ad7e.jpg?webp=true&quality=90&resize=500%2C454",
  },
  {
    name: "Spicy Pork Ramen",
    ingredients: [
      {
        quantity: "2 tbsp",
        name: "olive oil",
        type: "Condiments",
      },
      {
        quantity: "1kg",
        name: "pork",
        type: "Meat",
      },
      {
        quantity: "1/4 tbsp",
        name: "salt",
        type: "Condiments",
      },
      {
        quantity: "1/4 tbsp",
        name: "pepper",
        type: "Condiments",
      },
      {
        quantity: "8 1/2 cups",
        name: "chicken broth",
        type: "Soups and Creams",
      },
      {
        quantity: 1,
        name: "onion",
        type: "Vegetables",
      },
      {
        quantity: 2,
        name: "carrots",
        type: "Vegetables",
      },
      {
        quantity: "1 stick",
        name: "celery",
        type: "Vegetables",
      },
      {
        quantity: "3 cloves",
        name: "garlic",
        type: "Vegetables",
      },
      {
        quantity: "1 thumb-sized piece",
        name: "ginger",
        type: "Vegetables",
      },
      {
        quantity: "2 tbsps",
        name: "soy sauce",
        type: "Condiments",
      },
      {
        quantity: "2 tbsps",
        name: "Gochujang Paste",
        type: "Condiments",
      },
      {
        quantity: 1,
        name: "red chilli",
        type: "Vegetables",
      },
      {
        quantity: 4,
        name: "eggs",
        type: "Dairy",
      },
      {
        quantity: "200 grs",
        name: "noodles",
        type: "Rice and pasta",
      },
      {
        quantity: 1,
        name: "leak",
        type: "Vegetables",
      },
      {
        quantity: "100grs",
        name: "spinach leaves",
        type: "Vegetables",
      },
      {
        quantity: "1 tbsp",
        name: "sesame seeds",
        type: "Condiments",
      },
      {
        quantity: "1 tsp",
        name: "red chilli flakes",
        type: "Vegetables",
      },
      {
        quantity: "small bunch",
        name: "sping onions",
        type: "Vegetables",
      },
    ],
    instructions:
      "Preheat the oven to 150C/300F. Place a large casserole pan on the hob, add 1 tbsp of the oil and heat until very hot.Season the pork with the salt and pepper and place in the pan with the hot oil. Seal on all sides.Pour the stock over the pork.Add in the onion, the whole carrot, celery, garlic and ginger.Now add the mirin, soy sauce, gochujang and the red chilli. Bring to the boil, then place a lid on the pan and place in the oven for 4 hours.Take the pan out of the oven and place the pork on a chopping board. Remove and discard the layer of fat. Shred the pork using two forks.Place a sieve over a large bowl and strain the cooking liquid. Throw the strained vegetables away and place the liquid back in the pan with the shredded pork. Leave on a low heat to keep warm.Place the eggs in a small pan. Just cover with cold water. Bring to the boil, then simmer for 6 minutes.Remove the eggs from the heat and place in a bowl of cold water to stop the cooking process.If you're using dried noodles, place the noodles in a pan of boiling water and boil for 5 minutes. Then drain, run under cold water (to stop them sticking) and put to one side.Heat the remaining oil in a frying pan.Add the leek, season with a pinch of salt and pepper then fry for 5 minutes, stirring a couple of times.Push the leeks to one side of the pan and add the spinach to the pan. Allow to wilt for 1 minute.Divide the noodles between four bowls. Top with the hot broth, shredded pork, leek, spinach and carrot matchsticks.Carefully peel the two eggs and slice in half. Place 2 halves in each bowl.Garnish the soup with spring onions, then sprinkle with the white and black sesame seeds and the chilli flakes before serving.",
    imageURL:
      "https://www.kitchensanctuary.com/wp-content/uploads/2016/07/Spicy-pork-ramen-noodle-tall-FS.jpg",
  },
];

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
  .catch((err) => console.log("Error connection to the DB", err));
