const rentSrvc = require('../services/rent.service');

function getRentById(req, res) {
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
    
}

function getRents(req, res) {
    console.log("all rents");
    rentSrvc.getRents().then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows));
        res.end(JSON.stringify(resp.rows));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
}

function saveRent(req, res) {
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
}

function updateRent(req, res) {
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
}

function deleteRent(req, res) {
    var rent_id = req.params.rent_id;
    console.log("Deleting rent_id: " + rent_id);
    rentSrvc.deleteRent(rent_id).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
}

module.exports = {
    getRentById: getRentById,
    getRents: getRents,
    saveRent: saveRent,
    updateRent: updateRent,
    deleteRent: deleteRent
}