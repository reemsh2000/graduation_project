const connection = require("../../config/connection");

const getNaturalIngradientsQuery = () => connection.query('SELECT * FROM natural_ingradients;');

module.exports = getNaturalIngradientsQuery;