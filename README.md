# ToCookOrNotToCook

## Description

Search platform for recipes based on the ingredients you have in your fridge. You have the possibility to post your own recipes and receive comments and ratings from other users.

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the cooking haters screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and search, log in and sign up.
- **sign up** - As a user I want to sign up on the web page so that I can add favorite recipes to my list and create my own.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **favorite list** - As a user I want to see the list of my favorite and delete them.
- **my recipes list** - As a user I want to see the list of the recipes I created and be able to delete them.
- **edit user** - As a user I want to edit my personal information
- **search** - As a user I want to search for a recipe depending on the ingredients I have available

## Server Routes (Back-end):

| **Method** | **Route**                 | **Description**                                                       | Request - Bo                  |
| ---------- | ------------------------- | --------------------------------------------------------------------- | ----------------------------- |
| `GET`      | `/`                       | Renders `login` form view.                                            |                               |
| `POST`     | `/login`                  | Sends `login` form data to the server.                                | { username, password }        |
| `GET`      | `/signup`                 | Renders `signup` form view.                                           |                               |
| `POST`     | `/signup`                 | Sends `signup` info to the server and creates user in the DB.         | { username, email, password } |
| `GET`      | `/logout`                 | Destroys current session.                                             |                               |
| `GET`      | `/[?q=str]`               | Renders the main recipes view. Allows for custom search               |                               |
| `GET`      | `/recipes/:id`            | Renders the details recipe view                                       |                               |
| `POST`     | `/recipes/:id`            | Posts a review in a recipe                                            |                               |
| `GET`      | `/private/myprofile`      | Private route. Renders personal profile                               |                               |
| `GET`      | `/private/myprofile/edit` | Private route. Renders edit-profile view                              |                               |
| `POST`     | `/private/myprofile/edit` | Private route. Sends updated user's info to the server                |                               |
| `GET`      | `/private/favorites`      | Private route. Renders the `favorites` and `myRecipes` view.          |                               |
| `GET`      | `/private/favorites/creat | Private route. Renders form to create new recipe                      |                               |
| `POST`     | `/private/favorites/crea  | Private route. Sends new recipe's data to the server                  |                               |
| `POST`     | `/private/favorites/:reci | Private route. Removes a recipe the user has created from the server. |                               |
| `POST`     | `/private/favorites/:rec  | Private route. Adds an existing recipe to user's favorites.           |                               |
| `POST`     | `/private/favorites/:rec  | Private route. Removes a recipe from user's favorites                 |                               |

## Models

User model

```
{
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  favorites: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
    default: [],
  },
  myRecipes: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
    default: [],
  },
  imageURL: {
    type: String,
  },
}

```

Recipe model

```
{
  name: { type: String },
  ingredients: [
    {
      name: { type: String },
      quantity: String,
      type: {
        type: String,

        enum: [
          "Meat",
          "Fish",
          "Condiments",
          "Drinks",
          "Vegetables",
          "Cereals and Legumes",
          "Flours",
          "Rice and pasta",
          "Soups and Creams",
          "Dairy",
          "Fruits",
        ],
      },
    },
  ],
  instructions: { type: String },
  imageURL: {
    type: String,
  },
  reviews: [String],
}
```

## Backlog

- Rating

- In recipe ID page: name / pic of the creator that links to the other recipes created by that person
- Limit to one review per user
- Require all the fields for the creation of the recipe
- Inspire me button
- Cocktails

## Links

### Git

The url to your repository and to your deployed project

### Slides

https://docs.google.com/presentation/d/1SZ0e4mvzarb-qaDO-8SVVfqxCnKMzE838idNLl9NPX0/edit?usp=sharing
