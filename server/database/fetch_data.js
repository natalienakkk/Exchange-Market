require('dotenv').config();
const pool = require('./db');

async function getServiceExchanges() {
    try {
        const res = await pool.query('SELECT * FROM users');
        console.log(res.rows); // outputs the rows returned by the query
    } catch (err) {
        console.error(err);
    }
}

getServiceExchanges();
