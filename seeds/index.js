const sequelize = require('../config/connection');
const seedDrinks = require('./drinkData');
const seedLocation = require('./locationData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedDrinks();

  await seedLocation();

  process.exit(0);
};

seedAll();
