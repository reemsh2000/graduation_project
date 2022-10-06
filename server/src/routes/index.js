const router = require("express").Router();
const {
  getRecipe,
  getArticles,
  getActivities,
  getHealthCareVideos,
  getNaturalIngradients,
} = require("../controllers");
router.get("/", (req, res) => {
  res.json({ hi: "start" });
});
router.get("/recipes/:mealName", getRecipe);
router.get("/articles", getArticles);
router.get("/activities", getActivities);
router.get("/healthCareVideos", getHealthCareVideos);
router.get("/naturalIngradients", getNaturalIngradients);

module.exports = router;
