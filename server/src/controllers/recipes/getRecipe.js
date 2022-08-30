const axios = require("axios");

const getRecipe = async (req, res) => {
  const { mealName } = req.params;
  try {
    const result = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    );
    if (result.data.meals) {
      res.json({ data: result.data.meals[0] });
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = getRecipe;
