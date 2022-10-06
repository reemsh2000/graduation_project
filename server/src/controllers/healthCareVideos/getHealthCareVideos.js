const { getHealthCareVideosQuery } = require("../../database/queries");

const getHealthCareVideos = async (req, res) => {
  try {
    const result = await getHealthCareVideosQuery();
    if (result.rowCount) {
      return res.json({ data: result.rows });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = getHealthCareVideos;
