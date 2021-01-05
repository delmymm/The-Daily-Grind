const config = require('../config/connection');

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect
  }
)

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;


// db.user = require('./User') (sequelize, Sequelize);
db.drink = require('./Drink') (sequelize, Sequelize);
db.location = require('./Location') (sequelize, Sequelize);

db.location.belongsToMany(db.drink, {
  through:"location_drinks",
  foreignKey: "location_id",
  otherKey: "drink_id"
});

db.drink.belongsToMany(db.location, {
  through:"location_drinks",
  foreignKey: "drink_id",
  otherKey: "location_id"
});


module.exports = db;