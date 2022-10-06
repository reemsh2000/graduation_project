const connection = require("../../config/connection");

const editInspirationalStoryQuery = (title, content, image, storyId) =>
  connection.query(
    "UPDATE inspirational_stories SET image = $1, title = $2, content = $3 WHERE id = $4;",
    [image, title, content, storyId]
  );

module.exports = editInspirationalStoryQuery;
