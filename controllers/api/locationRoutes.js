const router = require('express').Router();
const Dish = require('../../models/Location');

// route to create/add a location
router.post('/', async (req, res) => {
  try { 
    const locationData = await Location.create({
    store_name: req.store_name,
    street_address: req.body.street_address,
    city: req.body.city,
    state_and_zip: req.body.state_and_zip,
    phone: req.body.phone,
    website: req.body.website,
  });
  res.status(200).json(locationData)
} catch (err) {
  res.status(400).json(err);
}
});

// This action method is the Controller. It accepts input and sends data to the Model and the View.
router.put('/:id', async (req, res) => {
 
// This sends the data to the Model so that one drink can be updated with new data in the database.
  try {
    const location = await Location.update(
    {
    store_name: req.store_name,
    street_address: req.body.street_address,
    city: req.body.city,
    state_and_zip: req.body.state_and_zip,
    phone: req.body.phone,
    website: req.body.website,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    
    // This sends the updated data (location) back to handler that dispatched the fetch request.
    res.status(200).json(location);
  } catch (err) {
      res.status(500).json(err);
    };
});

module.exports = router;
