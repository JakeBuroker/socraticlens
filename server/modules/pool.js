const pg = require('pg');
let pool;

if (process.env.DATABASE_URL) {
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}
// When we're running this app on our own computer
// we'll connect to the postgres database
else {
    pool = new pg.Pool({
        host: 'localhost',
        port: 5432,
        database: 'socraticlens', 
    });
}

module.exports = pool;
