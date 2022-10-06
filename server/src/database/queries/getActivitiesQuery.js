const connection = require('../config/connection');

const getActivitiesQuery = () => connection.query('SELECT * FROM activities;');

module.exports = getActivitiesQuery;