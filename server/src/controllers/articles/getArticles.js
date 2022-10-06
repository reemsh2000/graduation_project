const { getArticlesQuery } = require("../../database/queries");

const getArticles = async (req, res) => {
  try {
    const result = await getArticlesQuery();
    if (result.rowCount) {
      return res.json({ data: result.rows });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = getArticles;
