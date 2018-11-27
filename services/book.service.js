var { Pool } = require('pg');

var connStr = process.env.DATABASE_URL;
if (!connStr|| connStr.trim().length == 0) connStr = 'postgres://tatdaruinyttak:596df1df5f86575869cb746597a2e2c1f49a24ee4cb30c9f9bfe90111a7f0ec6@ec2-54-204-36-249.compute-1.amazonaws.com:5432/d2edfh95gtlpe1';
const pool = new Pool({
    connectionString: connStr,
    ssl: true
});

