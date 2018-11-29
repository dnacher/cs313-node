var { Pool } = require('pg');
var connStr = process.env.DATABASE_URL;

const URI = 'postgres://msleskqgvirdci:44d2e350a77acea22d701bf2b351f4f78c764c07a8809797fa851083682d3427@ec2-54-204-40-248.compute-1.amazonaws.com:5432/d9erevdp3tdeeg';

if (!connStr|| connStr.trim().length == 0) connStr = URI;
const pool = new Pool({
    connectionString: connStr,
    ssl: true
});

function RentService() {};

RentService.prototype.getRentById = function( rent_id ) {
    return pool.query('SELECT user_id,item_id, date_start,date_end FROM rent WHERE rent_id = $1', [rent_id]);
};

RentService.prototype.getRents = function() {
    return pool.query('SELECT user_id,item_id, date_start,date_end FROM rent');
};

RentService.prototype.saveRent = function(user_id,item_id, date_start,date_end) {
    return pool.query('INSERT INTO rent (user_id,item_id, date_start,date_end) VALUES($1,$2,$3,$4)', 
    [user_id,item_id, date_start,date_end]);
};

RentService.prototype.updateRent = function(rent_id, item_id) {
    return pool.query('UPDATE rent set item_id=$1 WHERE rent_id=$2', [item_id, rent_id]);
};

RentService.prototype.deleteRent = function(rent_id) {
    return pool.query('DELETE FROM rent WHERE rent_id= $1', [rent_id]);
};

var rentService = new RentService();

module.exports = RentService;