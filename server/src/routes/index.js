const router = require("express").Router();
const { getRecipe } = require("../controllers");
router.get("/", (req, res) => {
  res.json({ hi: "start" });
});
router.get("/recipes/:mealName",getRecipe);
module.exports = router;
