//express
const express = require('express');
var app = express();
//session
var session = require('express-session');
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
//path
const path = require('path');
//port
const PORT = process.env.PORT || 5000;
//controllers
const authorController = require('./controller/authorController.js');
const itemTypeController = require('./controller/itemTypeController.js');
const itemController = require('./controller/itemController.js');
const userTypeController = require('./controller/userTypeController.js');
const userController = require('./controller/userController.js');
const rentController = require('./controller/rentController.js');
const bcrypt = require('bcrypt');

//setters
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//use
app.use(express.static(path.join(__dirname,"/public")))
//Session
app.use(expressValidator());
//app.use(cookieParser);
app.use(expressValidator());
app.use(session({secret: 'ssshhhhh',resave: false, saveUninitialized: false}));
//Middleware

//Routes
app.get('/', (req, res) => {    
    console.log(`on root`);
    res.render('pages/login', {title: 'Login', success: false, errors: req.session.errors});
    req.session.errors = null;
});

app.get('/login', (req, res) => {
    console.log(`on root`);
    res.render('pages/login');
});

app.post('/checkLogin/:username/:password', (req, res) => {
    console.log('checkLogin in main');
    password = req.params.password;
    username = req.params.username;
    console.log(username + " " + password);
    var resp = userController.getUserByName(username);
    hash = resp.password;
    bcrypt.compare(password, hash, function(err, res) {
        if(res === true) {
            console.log("true check");
        } else {
            console.log("false check");  
        } 
    });
    console.log('password:' + password + ' hash:' + hash);
    if(password === hash){

    }
});


    

app.get('/signup', (req, res) => {
    console.log(`on signup`);
    res.render('pages/signup');
});

app.get('/index', (req, res) => {
    sess = req.session;
    //if(sess.email) {
   // res.write('<h1>Hello '+sess.email+'</h1>');
    console.log(`on root with session`);
    res.render('pages/index');
    //res.end('<a href="+">Logout</a>');
    //} else {
    //    res.write('<h1>Please login first.</h1>');
    //    res.end('<a href="/login">Login</a>');
    //}
    
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

app.get('/userType', (req, res) => {
    console.log(`on user type page`);
    res.render('pages/userType');
});

app.get('/userSetup', (req, res) => {
    console.log(`on user Setup page`);
    res.render('pages/userSetup');
});

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

app.post('/item/:item_type_id/:item_author_id/:title/:subtitle',itemController.saveItem);

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

app.put('/user/:user_id/:usertype', userController.updateUser);

app.delete('/user/:user_id', userController.deleteUser);

app.get('/user/check_password/:pass/:hash', userController.checkPassword);

//*********************************************************rent Functions*********************************************************
app.get('/rent/:value', rentController.getRentById);

app.get('/rent',rentController.getRents);

app.post('/rent/:user_id/:item_id/:date_start/:date_end', rentController.saveRent);

app.put('/rent/:rent_id/:item_id', rentController.updateRent);

app.delete('/rent/:rent_id', rentController.deleteRent);
//*********************************************************END Functions*********************************************************
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));