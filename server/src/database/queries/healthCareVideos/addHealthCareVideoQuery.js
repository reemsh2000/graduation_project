const connection = require("../../config/connection");
const addHealthCareVideoQuery = (title, url) =>
  connection.query("articles(title, url) VALUES ($1,$2)", [title, url]);

module.exports = addHealthCareVideoQuery;
