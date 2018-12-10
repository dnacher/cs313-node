const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const authorController = require('./controller/authorController.js');
const itemTypeController = require('./controller/itemTypeController.js');
const itemController = require('./controller/itemController.js');
const userTypeController = require('./controller/userTypeController.js');
const userController = require('./controller/userController.js');
const rentController = require('./controller/rentController.js');
const serverSession = require('./server/server.js')

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,"/public")))

//Middleware

//Routes
app.get('/', (req, res) => {
    console.log(`on root`);
    res.render('pages/index');
});

app.get('/login', (req, res) => {
    console.log(`on root`);
    res.render('pages/login');
});

app.get('/index', (req, res) => {
    console.log(`on root`);
    res.render('pages/index');
});

app.get('/authors', (req, res) => {
    console.log(`on author page`);
    res.render('pages/author');
});

app.get('/items', (req, res) => {
    console.log(`on item page`);
    res.render('pages/item');
});

app.get('/itemsType', (req, res) => {
    console.log(`on item type page`);
    res.render('pages/itemType');
});

//Server sessions.
// Setup our routes
app.post('/login', serverSession.handleLogin);
app.post('/logout', serverSession.handleLogout);
app.get('/verifyLogin', serverSession.verifyLogin);

// This method has a middleware function "verifyLogin" that will be called first
app.get('/getServerTime', serverSession.getServerTime);


//*********************************************************Authors functions*********************************************************
app.get('/author/:value', authorController.getAuthorById);

app.get('/author', authorController.getAuthors);

app.post('/author/:name/:descr', authorController.saveAuthor);

app.put('/author/:author_id/:descr', authorController.updateAuthor);

app.delete('/author/:author_id', authorController.deleteAuthor);

//*********************************************************Item Type Functions*********************************************************
app.get('/item_type/:value',itemTypeController.getItemTypeById);

app.get('/item_type', itemTypeController.getItemTypes);

app.post('/item_type/:name/:descr', itemTypeController.saveItemType);

app.put('/item_type/:item_type_id/:descr', itemTypeController.updateItemType);

app.delete('/item_type/:item_type_id', itemTypeController.deleteItemType);

//*********************************************************Item Functions*********************************************************
app.get('/item/:value', itemController.getItemById);
 
app.get('/item', itemController.getItems);

app.post('/item/:item_type_id/:item_author_id/:name/:descr',itemController.saveItem);

app.put('/item/:item_id/:descr', itemController.updateItem);

app.delete('/item/:item_id', itemController.deleteItem);

//*********************************************************user_type Functions******************************************************
app.get('/user_type/:value', userTypeController.getUserTypeById);

app.get('/user_type', userTypeController.getUserTypes);

app.post('/user_type/:name/:descr', userTypeController.saveUserType);

app.put('/user_type/:user_type_id/:descr', userTypeController.updateUserType);

app.delete('/user_type/:user_type_id', userTypeController.deleteUserType);

//*********************************************************user Functions**********************************************************
app.get('/user/:value',userController.getUserById);

app.get('/user', userController.getUsers);

app.get('/user/name/:value', userController.getUserByName)

app.post('/user/:user_type_id/:name/:descr/:password', userController.saveUser);

app.put('/user/:user_id/:descr', userController.updateUser);

app.delete('/user/:user_id', userController.deleteUser);

//*********************************************************rent Functions*********************************************************
app.get('/rent/:value', rentController.getRentById);

app.get('/rent',rentController.getRents);

app.post('/rent/:user_id/:item_id/:date_start/:date_end', rentController.saveRent);

app.put('/rent/:rent_id/:item_id', rentController.updateRent);

app.delete('/rent/:rent_id', rentController.deleteRent);
//*********************************************************END Functions*********************************************************
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));