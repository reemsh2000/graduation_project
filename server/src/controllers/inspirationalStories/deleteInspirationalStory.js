const e = require("express");
const {
  deleteInspirationalStoryQuery,
  getInspirationalStoryByIdQuery,
} = require("../../database/queries");

const deleteInspirationalStory = async (req, res) => {
  const { storyId } = req.params;
  try {
    const { rows } = await getInspirationalStoryByIdQuery(storyId);
    if (rows.length) {
      await deleteInspirationalStoryQuery(storyId);
      return res.status(202).json({ message: "deleted successfully" });
    } else {
      return res.status(404).json({ message: "the story doesn't exist" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = deleteInspirationalStory;
