const connection = require("../../config/connection");

const getInspirationalStoryByIdQuery = (id) => connection.query('SELECT * FROM inspirational_stories WHERE id=$1;',[id]);

module.exports = getInspirationalStoryByIdQuery;