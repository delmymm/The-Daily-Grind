const router = require('express').Router();
const Dish = require('../../models/Drink');

// route to create/add a drink
router.post('/', async (req, res) => {
  try { 
    const drinkData = await Drink.create({
    drink_name: req.body.drink_name,
    drink_description: req.body.drink_description,
    drink_type: req.body.drink_type,
    store_name: req.body.store_name,
  });
  res.status(200).json(drinkData)
} catch (err) {
  res.status(400).json(err);
}
});

// This action method is the Controller. It accepts input and sends data to the Model and the View.
router.put('/:id', async (req, res) => {
 
// This sends the data to the Model so that one drink can be updated with new data in the database.
  try {
    const drink = await Drink.update(
    {
        drink_name: req.body.drink_name,
        drink_description: req.body.drink_description,
        drink_type: req.body.drink_type,
        store_name: req.body.store_name,
      },
    {
      where: {
        id: req.params.id,
      },
    });
    
    // This sends the updated data (drink) back to handler that dispatched the fetch request.
    res.status(200).json(drink);
  } catch (err) {
      res.status(500).json(err);
    };
});

module.exports = router;
