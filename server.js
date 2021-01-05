require("dotenv").config()
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const db = require('./models');

const routes = require('./controllers');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening to port: ' + PORT));
});