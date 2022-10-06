const { getInspirationalStoriesQuery } = require("../../database/queries");

const getInspirationalStories = async (req, res) => {
  try {
    const result = await getInspirationalStoriesQuery();
    return res.json({ data: result.rows });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getInspirationalStories;
