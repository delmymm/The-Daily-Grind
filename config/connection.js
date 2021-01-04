/*const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'mysql',
    // port: 3306,
  }
);

module.exports = sequelize;*/

module.exports = {
  HOST: process.env.HOST,
  USER: process.env.DB_USER,
  DB: process.env.DB_NAME,
  PASSWORD: process.env.DB_PASSWORD,
  dialect: 'mysql',
}
