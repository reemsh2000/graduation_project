const router = require("express").Router();
const {
  getRecipe,
  getArticles,
  getActivities,
  getHealthCareVideos,
  getNaturalIngradients,
  getInspirationalStories,
  login,
  signup,
} = require("../controllers");

router.get("/", (req, res) => {
  res.json({ hi: "start" });
});
router.get("/recipes/:mealName", getRecipe);
router.get("/articles", getArticles);
router.get("/activities", getActivities);
router.get("/healthCareVideos", getHealthCareVideos);
router.get("/naturalIngradients", getNaturalIngradients);
router.get("/inspirationalStories", getInspirationalStories);

router.post("/login", login);
router.post("/signup", signup);
module.exports = router;
