var { Pool } = require('pg');
var connStr = process.env.DATABASE_URL;

const URI = 'postgres://msleskqgvirdci:44d2e350a77acea22d701bf2b351f4f78c764c07a8809797fa851083682d3427@ec2-54-204-40-248.compute-1.amazonaws.com:5432/d9erevdp3tdeeg';

if (!connStr|| connStr.trim().length == 0) connStr = URI;
const pool = new Pool({
    connectionString: connStr,
    ssl: true
});

function ItemTypeService() {};

ItemTypeService.prototype.getItemTypeById = function( item_type_id ) {
    return pool.query('SELECT item_type_id,name, description FROM item_type WHERE item_type_id = $1', [item_type_id]);
};

ItemTypeService.prototype.getItemTypes = function() {
    return pool.query('SELECT item_type_id,name, description FROM item_type');
};

ItemTypeService.prototype.saveItemType = function(name, descr) {
    return pool.query('INSERT INTO item_type (name,description) values($1,$2)', [name, descr]);
};

ItemTypeService.prototype.updateItemType = function(item_type_id, descr) {
    return pool.query('UPDATE item_type set description=$1 WHERE item_type_id=$2', [descr, item_type_id]);
};

ItemTypeService.prototype.deleteItemType = function(item_type_id) {
    return pool.query('DELETE FROM item_type WHERE item_typer_id= $1', [item_type_id]);
};

var itemTypeService = new ItemTypeService();

module.exports = itemTypeService;