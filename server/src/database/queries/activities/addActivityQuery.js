const connection = require("../../config/connection");

const addActivityQuery = ({name, burnt_calories, url }) =>
  connection.query(
    "activities(name, burnt_calories, url) VALUES ($1,$2,$3)",
    [name, burnt_calories, url]
  );

module.exports = addActivityQuery;
