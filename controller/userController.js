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

function getUserByName(req, res) {
    var value= req.params.value;
    console.log("user by name");
    console.log(value);
    userSrvc.getUserByName(value).then(resp => { 
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
    userSrvc.saveUser(user_type_id,name,descr,pass).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
}

function updateUser(req, res) {
    var descr = req.params.descr;
    var user_id = req.params.user_id;
    console.log("updating user: " + user_id + " " + descr);
    userSrvc.updateUser(user_id,descr).then(resp => { 
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

function login(request, response) {
	var result = {success: false};

    var user = this.getUserByName(request.body.username);


	// We should do better error checking here to make sure the parameters are present
	// if (request.body.username == "admin" && request.body.password == "password") {
	// 	request.session.user = request.body.username;
	// 	result = {success: true};
	// }

    response.json(result);
    response.json(user);
}

module.exports = {
    getUserById: getUserById,
    getUserByName: getUserByName,
    getUsers: getUsers,
    saveUser: saveUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}