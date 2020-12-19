const { Drink } = require('../models');

const drinkData = [
  {
    drink_name: 'Vanilla Latte',
    description: 'They can come hot or iced, and though they contain a good amount of coffee, it tastes like you dipped a sugar cookie into coffee',
    drink_type: 'Coffee',
    drink_id: 1,
    store_name: 'Joe Coffee and Espresso Bar',
    store_location: '145 E Utah Ave Ste 2, Payson, UT 84651',
    store_phone: 801-465-1220,
  },
  {
    drink_name: 'Carmal Macchiato',
    description: 'They taste like vanilla latte, but with caramel on top. Which incidentally is what they are.',
    drink_type: 'Coffee',
    drink_id: 2,
    store_name: 'Peace on Earth Coffee',
    store_location: '35 N 300 W #200 Provo, Utah 84601',
    store_phone: 801-577-4710,
  },
  {
    drink_name: 'Carmel Blonde',
    description: 'Carmel, Praline, White Chocolate',
    drink_type: 'Coffee',
    drink_id: 3,
    store_name: 'The Coffee Shop',
    store_location: '12571 S. PASTURE RD STE A, RIVERTON, UT 84096',
    store_phone: 801-759-9595,
  },
  {
    drink_name: 'Pourover',
    description: 'hot water hand-poured over grinds for fuller, richer flavor',
    drink_type: 'Coffee',
    drink_id: 4,
    store_name: 'Rugged Grounds',
    store_location: '29 East 400 South, Salt Lake City, Utah 84111',
    store_phone: 801-888-3367,
  },
  {
    drink_name: 'Coffee or Die',
    description: 'Coffee or Die Roast serves as a reminder of the foundation of our great nation. Let no American forget where it all began.  This is a grind or Bean coffee that you can take home.  If you would like you can get a cup at their coffee bar in a variety of recipes',
    drink_type: 'Coffee',
    drink_id: 5,
    store_name: 'Black Rifle Coffee Company',
    store_location: '1144 S 500 W Salt Lake City, UT 84101',
    store_phone: 385-262-7184,
  },
  {
    drink_name: 'Americano',
    description: 'espresso with hot water',
    drink_type: 'Coffee',
    drink_id: 6,
    store_name: 'Dailey Rise Coffee',
    store_location: '2865 Washington Blvd., Ogden, Utah 84401',
    store_phone: 801-393-4581,
  },
];

const seedDrinks = () => Drink.bulkCreate(drinkdata);

module.exports = seedDrinks;