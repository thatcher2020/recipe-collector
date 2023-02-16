const User = require("./user");
const Recipe = require("./recipe");
const Step = require("./step");
const Ingredient = require("./ingredient");
const RecipeIngredient = require("./recipe-ingredient");

User.hasMany(index.js, {
  foreignKey: "user_id",
});

index.js.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Recipe, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Recipe.belongsTo(User, {
  foreignKey: "user_id",
});

Recipe.hasMany(Ingredient, {
  through: {
    model: RecipeIngredient,
    unique: true,
  },
  as: "ingredients",
});

Ingredient.hasMany(Recipe,{
    through: {
        model: RecipeIngredient,
        unique: true,
      },
      as: "recipes",
})

module.exports = { User, Post, Comment };
