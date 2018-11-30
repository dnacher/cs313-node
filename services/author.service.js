var { Pool } = require('pg');
var connStr = process.env.DATABASE_URL;

const URI = 'postgres://msleskqgvirdci:44d2e350a77acea22d701bf2b351f4f78c764c07a8809797fa851083682d3427@ec2-54-204-40-248.compute-1.amazonaws.com:5432/d9erevdp3tdeeg';

if (!connStr|| connStr.trim().length == 0) connStr = URI;
const pool = new Pool({
    connectionString: connStr,
    ssl: true
});

function AuthorService() {};

AuthorService.prototype.getAuthorById = function( author_id ) {
    return pool.query('select author_id,name, description from author where author_id = $1', [author_id]);
};

AuthorService.prototype.getAuthors = function() {
    return pool.query('select author_id,name, description from author');
};

AuthorService.prototype.saveAuthor = function(name, descr) {
    return pool.query('INSERT INTO author (name,description) values($1,$2)', [name, descr]);
};

AuthorService.prototype.updateAuthor = function(author_id, descr) {
    return pool.query('UPDATE author SET description = $1 WHERE author_id = $2', [descr, author_id]);
};

AuthorService.prototype.deleteAuthor = function(author_id) {
    return pool.query('DELETE FROM author WHERE author_id= $1', [author_id]);
};

var authorService = new AuthorService();

module.exports = authorService;