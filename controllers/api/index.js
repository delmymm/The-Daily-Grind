const router = require('express').Router();
const drinkRoutes = require('./drinkRoutes');
const locationRoutes = require('./locationRoutes');

router.use('/drink', drinkRoutes);
router.use('/location', locationRoutes);

module.exports = router;