const { Drink } = require('../models');

const drinkData = [
  {
    drink_name: 'Vanilla Latte',
    drink_description: 'They can come hot or iced, and though they contain a good amount of coffee, it tastes like you dipped a sugar cookie into coffee',
    drink_type: 'Coffee',
    store_name: 'Joe Coffee and Espresso Bar',
  },
  {
    drink_name: 'Carmal Macchiato',
    drink_description: 'They taste like vanilla latte, but with caramel on top. Which incidentally is what they are.',
    drink_type: 'Coffee',
    store_name: 'Peace on Earth Coffee',
  },
  {
    drink_name: 'Carmel Blonde',
    drink_description: 'Carmel, Praline, White Chocolate',
    drink_type: 'Coffee',
    store_name: 'The Coffee Shop',
  },
  {
    drink_name: 'Pourover',
    drink_description: 'hot water hand-poured over grinds for fuller, richer flavor',
    drink_type: 'Coffee',
    store_name: 'Rugged Grounds',
  },
  {
    drink_name: 'Coffee or Die',
    drink_description: 'Coffee or Die Roast serves as a reminder of the foundation of our great nation. Let no American forget where it all began.  This is a grind or Bean coffee that you can take home.  If you would like you can get a cup at their coffee bar in a variety of recipes',
    drink_type: 'Coffee',
    store_name: 'Black Rifle Coffee Company',
  },
  {
    drink_name: 'Americano',
    drink_description: 'espresso with hot water',
    drink_type: 'Coffee',
    store_name: 'Dailey Rise Coffee',
  },
];

const seedDrinks = () => Drink.bulkCreate(drinkData);

module.exports = seedDrinks;