const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.daily_grind_db,
  process.env.root,
  process.env.password,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3000,
  }
);

module.exports = sequelize;