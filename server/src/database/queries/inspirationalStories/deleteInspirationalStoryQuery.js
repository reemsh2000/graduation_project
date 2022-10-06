const connection = require("../../config/connection");

const deleteInspirationalStoryQuery = (id) => connection.query('DELETE FROM inspirational_stories WHERE id=$1', [id]);

module.exports = deleteInspirationalStoryQuery;
