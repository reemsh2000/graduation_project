const connection = require("../../config/connection");

const insertNewUserQuery = ({ name, email, password, isAdmin = false }) =>
  connection.query(
    "INSERT INTO users(name, email, password, isAdmin) VALUES ($1,$2,$3, $4) RETURNING *",
    [name, email, password, isAdmin]
  );

module.exports = insertNewUserQuery;
