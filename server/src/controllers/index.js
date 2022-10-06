const getRecipe = require("./recipes/getRecipe");
const getArticles = require("./articles/getArticles");
const getActivities = require("./activities/getActivities");
const getNaturalIngradients = require("./naturalIngradients/getNaturalIngradients");
const getHealthCareVideos = require("./healthCareVideos/getHealthCareVideos");
const getInspirationalStories = require("./inspirationalStories/getInspirationalStories");
const signup = require("./users/signup");
const login = require("./users/login");
module.exports = {
  getRecipe,
  getArticles,
  getArticles,
  getActivities,
  getNaturalIngradients,
  getHealthCareVideos,
  getInspirationalStories,
  signup,
  login,
};
