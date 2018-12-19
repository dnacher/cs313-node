var { Pool } = require('pg');
var connStr = process.env.DATABASE_URL;

const URI = 'postgres://msleskqgvirdci:44d2e350a77acea22d701bf2b351f4f78c764c07a8809797fa851083682d3427@ec2-54-204-40-248.compute-1.amazonaws.com:5432/d9erevdp3tdeeg';

if (!connStr|| connStr.trim().length == 0) connStr = URI;
const pool = new Pool({
    connectionString: connStr,
    ssl: true
});


function UserService() {};

UserService.prototype.getUserById = function( user_id ) {
    return pool.query('select user_id,user_type_id,name, description from users where user_id = $1', [user_id]);
};

UserService.prototype.getUserByName = function( user_name ) {
    return pool.query('select user_id,user_type_id,name, description,password from users where name = $1', [user_name]);
};

UserService.prototype.getUsers = function() {
    return pool.query('select user_id,user_type_id,name, description from users order by user_id');
};

UserService.prototype.saveUser = function(user_type_id,name, descr,password) {
    return pool.query('INSERT INTO users (user_type_id,name,description,password) values($1,$2,$3,$4)', [user_type_id, name, descr,password]);
};

UserService.prototype.updateUser = function(user_id, userTypeId) {
    return pool.query('UPDATE users set user_type_id=$1 WHERE user_id=$2', [userTypeId, user_id]);
};

UserService.prototype.deleteUser = function(user_id) {
    return pool.query('DELETE FROM users WHERE user_id= $1', [user_id]);
};

var userService = new UserService();

module.exports = userService;