const seedDrinks = require('./drinkData');
const seedLocation = require('./locationData');
const sequelize = require('../config/connection');
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedDrinks();

  await seedLocation();

  process.exit(0);
};

seedAll();
