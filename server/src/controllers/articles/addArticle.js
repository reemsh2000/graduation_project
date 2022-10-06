const { addArticleQuery } = require("../../database/queries");

const addArticle = async (req, res) => {
  const { title, content, image } = req.body;
  try {
    await addArticleQuery(title, content, image);
    return res.status(201).json({ message: "added successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = addArticle;
