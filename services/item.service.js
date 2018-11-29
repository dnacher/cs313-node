var { Pool } = require('pg');
var connStr = process.env.DATABASE_URL;

const URI = 'postgres://msleskqgvirdci:44d2e350a77acea22d701bf2b351f4f78c764c07a8809797fa851083682d3427@ec2-54-204-40-248.compute-1.amazonaws.com:5432/d9erevdp3tdeeg';

if (!connStr|| connStr.trim().length == 0) connStr = URI;
const pool = new Pool({
    connectionString: connStr,
    ssl: true
});

function ItemService() {};

ItemService.prototype.getItemById = function( item_id ) {
    return pool.query('select item_id,name, description from item where item_id = $1', [item_id]);
};

ItemService.prototype.getItems = function() {
    return pool.query('select item_id,name, description from item');
};

ItemService.prototype.saveItem = function(item_type_id,item_author_id,name, descr) {
    return pool.query('INSERT INTO item (item_type_id,item_author_id,name,description) values($1,$2,$3,$4)', 
    [item_type_id,item_author_id,name, descr]);
};

ItemService.prototype.updateItem = function(item_id, descr) {
    return pool.query('UPDATE item set description=$1 WHERE item_id=$2', [descr, item_id]);
};

ItemService.prototype.deleteItem = function(item_id) {
    return pool.query('DELETE FROM item WHERE item_id= $1', [item_id]);
};

var itemService = new ItemService();

module.exports = itemService;