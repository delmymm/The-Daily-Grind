const router = require('express').Router();
const drink = require('../models/Drink');

// route to get all dishes
router.get('/', async (req, res) => {
    const drinkData = await Drink.findAll().catch((err) => { 
        res.json(err);
      });
        const drinks = drinkData.map((drink) => drink.get({ plain: true }));
        res.render('all', { drinks });
      });
  
  // route to get one dish
  router.get('/drink/:id', async (req, res) => {
    try{ 
        const drinkData = await Drink.findByPk(req.params.id);
        if(!drinkData) {
            res.status(404).json({message: 'No drink with this id!'});
            return;
        }
        const drink = drinkData.get({ plain: true });
        res.render('drink', drink);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

module.exports = router;