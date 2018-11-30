const itemTypeSrvc = require('../services/item.service');

function getItemById(req, res) {
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
    
}

function getItems(req, res) {
    itemSrvc.getItems().then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows));
        res.end(JSON.stringify(resp.rows));
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    
}

function saveItem(req, res) {
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
}

function updateItem(req, res) {
    var descr = req.params.descr;
    console.log("updating item: " + name + " " + descr);
    itemSrvc.updateItem(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
}

function deleteItem(req, res) {
    var item_id = req.params.item_id;
    console.log("Deleting item: " + item_id);
    itemSrvcrSrvc.deleteItem(item_id).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
}

module.exports = {
    getItemById: getItemById,
    getItems: getItems,
    saveItem: saveItem,
    deleteItem: deleteItem,
    updateItem: updateItem
}