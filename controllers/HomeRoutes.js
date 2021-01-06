const router = require('express').Router();
const drink = require('../models/Drink');
const location = require('../models/Location');
const withauth = require("../utils/auth");

// route to get all drinks
//remember to add "withauth," after '/',
router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get("/form", async (req, res) => {
  res.render('form');
});

//remember to add "withauth," after '/',
router.get("/coffee", async (req, res) => {
  res.render('coffee');
});
//remember to add "withauth," after '/',
router.get("/tea", async (req, res) => {
  res.render('tea');
});
//remember to add "withauth," after '/',
router.get("/kids", async (req, res) => {
  res.render('kids');
});

router.get("/login", async (req, res) => {
  res.render('login');
});

router.get("/register", async (req, res) => {
  res.render('register');
});

// route to get one drink
router.get('/drink/:id', async (req, res) => {
  try {
    const drinkData = await Drink.findByPk(req.params.id);
    if (!drinkData) {
      res.status(404).json({ message: 'No drink with this id!' });
      return;
    }
    const drink = drinkData.get({ plain: true });
    res.render('drink', drink);
  } catch (err) {
    res.status(500).json(err);
  };
});

// route to get all locations
router.get('/', async (req, res) => {
  const locationData = await Location.findAll().catch((err) => {
    res.json(err);
  });
  const locations = locationData.map((location) => location.get({ plain: true }));
  res.render('all', { location });
});

// route to get one location
router.get('/location/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id);
    if (!locationData) {
      res.status(404).json({ message: 'No location with this id!' });
      return;
    }
    const location = locationData.get({ plain: true });
    res.render('location', location);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;