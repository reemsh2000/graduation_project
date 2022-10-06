const connection = require("../../config/connection");

const getInspirationalStoriesQuery = () => connection.query('SELECT * FROM inspirational_stories;');

module.exports = getInspirationalStoriesQuery;