// Dependencies=============================================================
const express = require('express');
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const port = process.env.port || 3000;

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutsDir: '${__dirname}/views/layouts'
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('main', {layout: 'index'});
});

app.listen(port, () => {
    console.log('app listening to port ' + port);
});