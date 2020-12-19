const { Location } = require('../models');

const locationData = [
{
    store_name: 'Joe Coffee and Espresso Bar',
    street_address: '145 E Utah Ave Ste 2',
    city: 'Payson', 
    state_and_zip: 'Utah, 84660',
    phone: '801-465-1220', 
    website: 'http://places.singleplatform.com/joe-coffee-shop-and-espresso/menu?ref=google#menu_997301',
},
{
    store_name: 'Peace on Earth Coffee',
    street_address: '35 N 300 W #200',
    city: 'Provo', 
    state_and_zip: 'Utah, 84601',
    phone: '801-577-4710', 
    website: 'https://peaceonearthcoffee.squarespace.com/',
},
{
    store_name: 'The Coffee Shop',
    street_address: '12571 S. PASTURE RD STE A',
    city: 'Riverton', 
    state_and_zip: 'Utah, 84096',
    phone: '801-759-9595', 
    website: 'http://www.thecoffeeshoput.com/',
},
{
    store_name: 'Rugged Grounds',
    street_address: '29 East 400 South',
    city: 'Salt Lake City', 
    state_and_zip: 'Utah 84111',
    phone: '801-888-3367', 
    website: 'http://www.ruggedgrounds.com/',
},
{
    store_name: 'Black Rifle Coffee Company',
    street_address: '1144 S 500 W',
    city: 'Salt Lake City', 
    state_and_zip: 'Utah 84101',
    phone: '385-262-7184', 
    website: 'https://www.blackriflecoffee.com/',
},
{
    store_name: 'Dailey Rise Coffee',
    street_address: '2865 Washington Blvd.',
    city: 'Ogden', 
    state_and_zip: 'Utah, 84401',
    phone: '801-393-4581', 
    website: 'https://dailyrisecoffee.com/',
  },
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;