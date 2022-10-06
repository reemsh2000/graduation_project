const {
  editInspirationalStoryQuery,
  getInspirationalStoryByIdQuery,
} = require("../../database/queries");

const editInspirationalStory = async (req, res) => {
  const { title, content, image, storyId } = req.body;
  try {
    const { rows } = await getInspirationalStoryByIdQuery(storyId);
    if (rows.length) {
      await editInspirationalStoryQuery(title, content, image, storyId);
      return res.status(201).json({ message: "updated successfully" });
    } else {
      return res.status(404).json({ message: "the story doesn't exist" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = editInspirationalStory;
