const connection = require("../../config/connection");

const addInspirationalStoryQuery = (user_id, title, content, image) =>
  connection.query(
    "INSERT INTO inspirational_stories(user_id, title,content,image) VALUES ($1,$2,$3,$4)",
    [user_id, title, content, image]
  );

module.exports = addInspirationalStoryQuery;
