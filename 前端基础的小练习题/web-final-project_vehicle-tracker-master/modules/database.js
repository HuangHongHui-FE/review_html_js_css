const mariadb = require("mariadb");

// TODO: Update these details
const USER_NAME = 'ym248';
const USER_PASS = 'bloated-diploma-italics-tipoff';

const database = mariadb.createConnection({
    host: 'db.trex-sandwich.com',
    // host: 'https://trex-sandwich.com/db',
    database: USER_NAME,
    user: USER_NAME,
    password: USER_PASS
});

module.exports = database;
