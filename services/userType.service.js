var { Pool } = require('pg');
var connStr = process.env.DATABASE_URL;

const URI = 'postgres://msleskqgvirdci:44d2e350a77acea22d701bf2b351f4f78c764c07a8809797fa851083682d3427@ec2-54-204-40-248.compute-1.amazonaws.com:5432/d9erevdp3tdeeg';

if (!connStr|| connStr.trim().length == 0) connStr = URI;
const pool = new Pool({
    connectionString: connStr,
    ssl: true
});

function UserTypeService() {};

UserTypeService.prototype.getUserTypeById = function( user_type_id ) {
    return pool.query('select user_type_id,name, description from user_type where user_type_id = $1', [user_type_id]);
};

UserTypeService.prototype.getUserTypes = function() {
    return pool.query('select user_type_id,name, description from user_type order by user_type_id');
};

UserTypeService.prototype.saveUserType = function(name, descr) {
    return pool.query('INSERT INTO user_type (name,description) values($1,$2)', [name, descr]);
};

UserTypeService.prototype.updateUserType = function(user_type_id, descr) {
    return pool.query('UPDATE user_type set description=$1 WHERE user_type_id=$2', [descr, user_type_id]);
};

UserTypeService.prototype.deleteUserType = function(user_type_id) {
    return pool.query('DELETE FROM user_type WHERE user_type_id= $1', [user_type_id]);
};

var userTypeService = new UserTypeService();

module.exports = userTypeService;