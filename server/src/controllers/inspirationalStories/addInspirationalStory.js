const { addInspirationalStoryQuery } = require("../../database/queries");

const addInspirationalStory = async (req, res) => {
  const { user_id, title, content, image } = req.body;
  try {
    await addInspirationalStoryQuery(user_id, title, content, image);
    return res.status(201).json({ message: "added successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = addInspirationalStory;
