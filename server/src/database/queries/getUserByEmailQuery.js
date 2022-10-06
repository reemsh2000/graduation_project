const connection = require('../../config/connection');

const getUserByEmailQuery = (email) => connection.query('SELECT * FROM users WHERE email=$1', [email]);

module.exports = getUserByEmailQuery;
