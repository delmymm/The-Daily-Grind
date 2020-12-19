const User = require('./User');
const Drink = require('./Drink');
const Location = require('./Location');

/*Drink.hasMany(Drink, {
  foreignKey: 'drink_id',
});

Location.belongsTo(Location, {
  foreignKey: 'location_id',
});
*/
module.exports = { User, Drink, Location };