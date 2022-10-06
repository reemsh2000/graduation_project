const { addHealthCareVideoQuery } = require("../../database/queries");

const addHealthCareVideo = async (req, res) => {
  const { title, url } = req.body;
  try {
    await addHealthCareVideoQuery(title, url);
    return res.status(201).json({ message: "added successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = addHealthCareVideo;
