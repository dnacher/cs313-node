const userSrvc = require('../services/user.service');

function getUserById(req, res) {
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
}

function getUsers(req, res) {
    console.log("all user");
    userSrvc.getUsers().then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows));
        res.end(JSON.stringify(resp.rows));
    })
    .catch(e => {
        console.log("Error: " + e);
    });    
}

function saveUser(req, res) {
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
}

function updateUser(req, res) {
    var descr = req.params.descr;
    console.log("updating user: " + name + " " + descr);
    userSrvc.updateUser(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
}

function deleteUser(req, res) {
    var user_id = req.params.user_id;
    console.log("Deleting user: " + user_id);
    userSrvc.deleteUser(user_id).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
}

module.exports = {
    getUserById: getUserById,
    getUsers: getUsers,
    saveUser: saveUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}