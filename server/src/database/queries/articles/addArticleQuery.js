const connection = require("../../config/connection");
const addActivityQuery = ({ title, content, image }) =>
  connection.query("articles(title, content, image) VALUES ($1,$2,$3)", [
    title,
    content,
    image,
  ]);

module.exports = addActivityQuery;
