var { Pool } = require('pg');
var connStr = process.env.DATABASE_URL;

const URI = 'postgres://msleskqgvirdci:44d2e350a77acea22d701bf2b351f4f78c764c07a8809797fa851083682d3427@ec2-54-204-40-248.compute-1.amazonaws.com:5432/d9erevdp3tdeeg';

function Services() {};


Services.prototype.getPool = function() {
    if (!connStr|| connStr.trim().length == 0) connStr = URI;
        const pool = new Pool({
        connectionString: connStr,
        ssl: true
        });
    return pool;
    }   