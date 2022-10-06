const connection = require("../../config/connection");

const addnaturalIngradientQuery = ({name, calorie, image }) =>
  connection.query(
    "INSERT INTO natural_ingradients(name, calorie, image) VALUES ($1,$2,$3)",
    [name, calorie, image]
  );

module.exports = addnaturalIngradientQuery;
