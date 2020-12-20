const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Drink extends Model {}

Drink.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    drink_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    explaination: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    drink_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    store_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    store_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    store_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'drink',
  }
);

module.exports = Drink;
