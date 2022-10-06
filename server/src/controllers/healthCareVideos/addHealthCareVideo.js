const { addHealthCareVideoQuery } = require("../../database/queries");

const addHealthCareVideo = async (req, res) => {
  try {
    const result = await addHealthCareVideoQuery();
    if (result.rowCount) {
      return res.json({ data: result.rows });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = addHealthCareVideo;
