const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
// const authorRoutes = require('./routes/author');
const authorSrvc = require('./services/author.service');
const itemTypeSrvc = require('./services/itemType.service');
const userTypeSrvc = require('./services/userType.service');
const userSrvc = require('./services/user.service');
const rentSrvc = require('./services/rent.service');

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


//*********************************************************authors functions*********************************************************
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

app.put('/author/:descr', (req, res) => {
    var descr = req.params.descr;
    console.log("Inserting author: " + name + " " + descr);
    authorSrvc.updateAuthor(name,descr).then(resp => { 
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


//*********************************************************item_type Functions*********************************************************
app.get('/item_type/:value', (req, res) => {
    var value= req.params.value;
    console.log("item type by id");
    console.log(value);
    itemTypeSrvc.getItemTypeById(value).then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows[0]));
        res.end(JSON.stringify(resp.rows[0]));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
});

app.get('/itemType', (req, res) => {
    var value= req.params.value;
    console.log("all itemTypes");
    itemTypeSrvc.getItemTypes().then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows));
        res.end(JSON.stringify(resp.rows));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
});

app.post('/item_type/:name/:descr', (req, res) => {
    var name = req.params.name;
    var descr = req.params.descr;
    console.log("Inserting Item_type: " + name + " " + descr);
    itemTypeSrvc.saveItemType(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

app.put('/item_type/:descr', (req, res) => {
    var descr = req.params.descr;
    console.log("updating item Type: " + name + " " + descr);
    itemTypeSrvc.updateItemType(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

app.delete('/item_type/:item_type_id', (req, res) => {
    var item_type_id = req.params.item_type_id;
    console.log("Deleting item Type: " + item_type_id);
    itemTypeSrvcrSrvc.deleteItemType(item_type_id).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

//*********************************************************item_type Functions*********************************************************
app.get('/item_type/:value', (req, res) => {
    var value= req.params.value;
    console.log("item type by id");
    console.log(value);
    itemTypeSrvc.getItemTypeById(value).then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows[0]));
        res.end(JSON.stringify(resp.rows[0]));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
});

app.get('/itemType', (req, res) => {
    var value= req.params.value;
    console.log("all itemTypes");
    itemTypeSrvc.getItemTypes().then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows));
        res.end(JSON.stringify(resp.rows));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
});

app.post('/item_type/:name/:descr', (req, res) => {
    var name = req.params.name;
    var descr = req.params.descr;
    console.log("Inserting Item_type: " + name + " " + descr);
    itemTypeSrvc.saveItemType(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

app.put('/item_type/:descr', (req, res) => {
    var descr = req.params.descr;
    console.log("updating item Type: " + name + " " + descr);
    itemTypeSrvc.updateItemType(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

app.delete('/item_type/:item_type_id', (req, res) => {
    var item_type_id = req.params.item_type_id;
    console.log("Deleting item Type: " + item_type_id);
    itemTypeSrvcrSrvc.deleteItemType(item_type_id).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

//*********************************************************item Functions*********************************************************
app.get('/item/:value', (req, res) => {
    var value= req.params.value;
    console.log("item by id");
    console.log(value);
    itemSrvc.getItemById(value).then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows[0]));
        res.end(JSON.stringify(resp.rows[0]));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
});

app.get('/item', (req, res) => {
    console.log("all item");
    itemSrvc.getItems().then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows));
        res.end(JSON.stringify(resp.rows));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
});

app.post('/item/:item_type_id/:item_author_id/:name/:descr', (req, res) => {
    var item_type_id = req.params.item_type_id;
    var item_author_id = req.params.item_author_id;
    var name = req.params.name;
    var descr = req.params.descr;
    console.log("Inserting Item: name: " + name + " description:" + descr + " item_author_id" + item_author_id + " item_type_id" + item_type_id);
    itemSrvc.saveItem(item_type_id,item_author_id,name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

app.put('/item/:descr', (req, res) => {
    var descr = req.params.descr;
    console.log("updating item: " + name + " " + descr);
    itemSrvc.updateItem(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

app.delete('/item/:item_id', (req, res) => {
    var item_id = req.params.item_id;
    console.log("Deleting item: " + item_id);
    itemSrvcrSrvc.deleteItem(item_id).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

//*********************************************************user_type Functions*********************************************************
app.get('/user_type/:value', (req, res) => {
    var value= req.params.value;
    console.log("user type by id");
    console.log(value);
    userTypeSrvc.getUserTypeById(value).then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows[0]));
        res.end(JSON.stringify(resp.rows[0]));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
});

app.get('/user_type', (req, res) => {
    var value= req.params.value;
    console.log("all user Types");
    userTypeSrvc.getUserTypes().then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows));
        res.end(JSON.stringify(resp.rows));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
});

app.post('/user_type/:name/:descr', (req, res) => {
    var name = req.params.name;
    var descr = req.params.descr;
    console.log("Inserting User_type: " + name + " " + descr);
    userTypeSrvc.saveUserType(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

app.put('/user_type/:descr', (req, res) => {
    var descr = req.params.descr;
    console.log("updating user Type: " + name + " " + descr);
    userTypeSrvc.updateUserType(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

app.delete('/user_type/:user_type_id', (req, res) => {
    var user_type_id = req.params.user_type_id;
    console.log("Deleting user Type: " + user_type_id);
    userTypeSrvc.deleteUserType(user_type_id).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

//*********************************************************user Functions*********************************************************
app.get('/user/:value', (req, res) => {
    var value= req.params.value;
    console.log("user by id");
    console.log(value);
    userSrvc.getUserById(value).then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows[0]));
        res.end(JSON.stringify(resp.rows[0]));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
});

app.get('/user', (req, res) => {
    var value= req.params.value;
    console.log("all user");
    userSrvc.getUsers().then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows));
        res.end(JSON.stringify(resp.rows));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
});

app.post('/user/:user_type_id/:name/:descr/:password', (req, res) => {
    var user_type_id = req.params.user_type_id;
    var name = req.params.name;
    var descr = req.params.descr;
    var pass = req.params.password;
    console.log("Inserting User: name: " + name + " descr: " + descr + " user_type_id: " + user_type_id);
    userSrvc.saveUser(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

app.put('/user/:descr', (req, res) => {
    var descr = req.params.descr;
    console.log("updating user: " + name + " " + descr);
    userSrvc.updateUser(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

app.delete('/user/:user_id', (req, res) => {
    var user_id = req.params.user_id;
    console.log("Deleting user: " + user_id);
    userSrvc.deleteUser(user_id).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

//*********************************************************rent Functions*********************************************************
app.get('/rent/:value', (req, res) => {
    var value= req.params.value;
    console.log("rent by id");
    console.log(value);
    rentSrvc.getRentById(value).then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows[0]));
        res.end(JSON.stringify(resp.rows[0]));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
});

app.get('/rent', (req, res) => {
    console.log("all rents");
    rentSrvc.getRents().then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows));
        res.end(JSON.stringify(resp.rows));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
});

app.post('/rent/:user_id/:item_id/:date_start/:date_end', (req, res) => {
    var user_id = req.params.user_id;
    var item_id = req.params.item_id;
    var date_start = req.params.date_start;
    var date_end = req.params.date_end;
    console.log("Inserting rent: user_id: " + user_id + " item_id: " + item_id + " date_start: " + date_start + " date_end: " + date_end);
    rentSrvc.saveRent(user_id,item_id,date_start,date_end).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

app.put('/rent/:rent_id/:item_id', (req, res) => {
    var rent_id = req.params.rent_id;
    var item_id = req.params.item_id;
    console.log("updating rent_id: " + rent_id + " item_id" + item_id);
    rentSrvc.updateRent(rent_id,item_id).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

app.delete('/rent/:rent_id', (req, res) => {
    var rent_id = req.params.rent_id;
    console.log("Deleting rent_id: " + rent_id);
    rentSrvc.deleteRent(rent_id).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));