/* const { Model, Sequelize } = require("sequelize/types");
const { sequelize } = require(".");

const { Model, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Drink extends Model { }

Drink.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    drink_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    drink_description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    drink_type: {
      type: Sequelize.STRING,
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

module.exports = Drink; */
module.exports = (sequelize, Sequelize) => {
const drink = sequelize.define('drinks', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  drink_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  drink_description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  drink_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  store_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

});
return drink
};

