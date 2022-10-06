const { addArticleQuery } = require("../../database/queries");

const addArticle = async (req, res) => {
  try {
    const result = await addArticleQuery();
    if (result.rowCount) {
      return res.json({ data: result.rows });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = addArticle;
