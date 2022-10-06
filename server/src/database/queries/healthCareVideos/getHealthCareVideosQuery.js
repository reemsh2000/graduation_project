const connection = require("../../config/connection");

const getHealthCareVideosQuery = () => connection.query('SELECT * FROM healthcare_videos;');

module.exports = getHealthCareVideosQuery;