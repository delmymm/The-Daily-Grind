const User = require('./User');
const Drink = require('./Drink');
const Location = require('./Location');

/*Drink.belongsTo(Location, {
  foreignKey: 'store_name',
});

Location.belongsTo(Drink, {
  foreignKey: 'store_name',
});*/

module.exports = { User, Drink, Location };