const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const authorRoutes = require('./routes/author');

var app = express();

app.use('/', authorRoutes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log(`on root`);
    res.render('pages/index');
});

app.get('/index', (req, res) => {
    console.log(`on root`);
    res.render('pages/index');
});

app.get('/authors', (req, res) => {
    console.log(`on author page`);
    res.render('pages/author');
});

app.get('/books', (req, res) => {
    console.log(`on book page`);
    res.render('pages/book');
});



app.listen(PORT, () => console.log(`Listening on ${ PORT }`));