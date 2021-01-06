const router = require('express').Router();
const drinkRoutes = require('./drinkRoutes');
const locationRoutes = require('./locationRoutes');
const userRoutes = require('./userRoutes');

router.use('/drink', drinkRoutes);
router.use('/location', locationRoutes);
router.use('/user', userRoutes);

module.exports = router;