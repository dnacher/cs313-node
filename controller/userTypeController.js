const userTypeSrvc = require('../services/userType.service');

function getUserTypeById(req, res) {
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
}

function getUserTypes(req, res) {
    console.log("all user Types");
    userTypeSrvc.getUserTypes().then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows));
        res.end(JSON.stringify(resp.rows));
    })
    .catch(e => {
        console.log("Error: " + e);
    });    
}

function saveUserType(req, res) {
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
}

function updateUserType(req, res) {
    var descr = req.params.descr;
    console.log("updating user Type: " + name + " " + descr);
    userTypeSrvc.updateUserType(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
}

function deleteUserType(req, res) {
    var user_type_id = req.params.user_type_id;
    console.log("Deleting user Type: " + user_type_id);
    userTypeSrvc.deleteUserType(user_type_id).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
}

module.exports = {
    getUserTypeById: getUserTypeById,
    getUserTypes: getUserTypes,
    saveUserType: saveUserType,
    deleteUserType: deleteUserType,
    updateUserType: updateUserType
}