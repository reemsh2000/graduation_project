const router = require("express").Router();
const { getRecipe, getArticles } = require("../controllers");
router.get("/", (req, res) => {
  res.json({ hi: "start" });
});
router.get("/recipes/:mealName", getRecipe);
router.get("/articles", getArticles);
module.exports = router;
