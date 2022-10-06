const connection = require("../../config/connection");
const addHealthCareVideoQuery = (title, url) =>
  connection.query("INSERT INTO healthcare_videos(title, url) VALUES ($1,$2)", [title, url]);

module.exports = addHealthCareVideoQuery;
