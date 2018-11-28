const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
// const authorRoutes = require('./routes/author');
const authorSrvc = require('./services/author.service');


var app = express();

// app.use('/', authorRoutes);

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


//authors functions
app.get('/author/:value', (req, res) => {
    var value= req.params.value;
    console.log("Authors by id");
    console.log(value);
    authorSrvc.getAuthorById(value).then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows[0]));
        res.end(JSON.stringify(resp.rows[0]));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
});

app.get('/author', (req, res) => {
    var value= req.params.value;
    console.log("all Authors");
    authorSrvc.getAuthors().then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows));
        res.end(JSON.stringify(resp.rows));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
});

app.post('/author/:name/:descr', (req, res) => {
    var name = req.params.name;
    var descr = req.params.descr;
    console.log("Inserting author: " + name + " " + descr);
    authorSrvc.saveAuthor(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

app.delete('/author/:author_id', (req, res) => {
    var author_id = req.params.author_id;
    var descr = req.params.descr;
    console.log("Deleting author: " + author_id);
    authorSrvc.deleteAuthor(author_id).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));