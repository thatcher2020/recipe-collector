const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class RecipeIngredient extends Model {}

RecipeIngredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },

    //need a measurement

    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ingredient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "project",
  }
);

module.exports = Project;
