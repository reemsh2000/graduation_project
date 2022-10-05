const connection = require('../config/connection');

const getArticlesQuery = () => connection.query('SELECT * FROM articles;');

module.exports = getArticlesQuery;