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
  getProfileData,
  addArticle,
  addHealthCareVideo,
  addnaturalIngradient,
  addActivity
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
router.get("/userProfile/:email", getProfileData);

router.post("/login", login);
router.post("/signup", signup);

//Admin routes 
router.post("/article",addArticle)
router.post("/healthCareVideo",addHealthCareVideo)
router.post("/naturalIngradient",addnaturalIngradient)
router.post("/activity",addActivity)
module.exports = router;
