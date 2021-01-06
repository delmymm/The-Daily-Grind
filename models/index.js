const User = require('./User');
const Drink = require('./Drink');
const Location = require('./Location');

Location.belongsToMany(Drink, {
  through: "location_drinks",
  foreignKey: "location_id",
  otherKey: "drink_id"
});

module.exports = { User, Drink, Location };