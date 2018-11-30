const itemTypeSrvc = require('../services/itemType.service');

function getItemTypeById(req, res) {
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
};

function getItemTypes(req, res) {
    console.log("all itemTypes");
    itemTypeSrvc.getItemTypes().then(resp => { 
        console.log("Response: " + JSON.stringify(resp.rows));
        res.end(JSON.stringify(resp.rows));
    })
    .catch(e => {
        console.log("Error: " + e);
    });  
}

function saveItemType(req, res) {
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
}

function updateItemType(req, res){
    var descr = req.params.descr;
    console.log("updating item Type: " + name + " " + descr);
    itemTypeSrvc.updateItemType(name,descr).then(resp => { 
        console.log("Done!");
        res.end("done");
    })
    .catch(e => {
        console.log("Error: " + e);
    });
}

function deleteItemType(req, res) {
    var item_type_id = req.params.item_type_id;
    console.log("Deleting item Type: " + item_type_id);
    itemTypeSrvcrSrvc.deleteItemType(item_type_id).then(resp => { 
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