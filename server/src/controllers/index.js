const getRecipe = require("./recipes/getRecipe");
const getArticles = require("./articles/getArticles");
const getActivities = require("./activities/getActivities");
const getNaturalIngradients = require("./naturalIngradients/getNaturalIngradients");
const getHealthCareVideos = require("./healthCareVideos/getHealthCareVideos");
const getInspirationalStories = require("./inspirationalStories/getInspirationalStories");
const signup = require("./users/signup");
const login = require("./users/login");
const getProfileData = require("./users/getProfileData");
const addActivity = require("./activities/addActivity");
const addArticle = require("./articles/addArticle");
const addHealthCareVideo = require("./healthCareVideos/addHealthCareVideo");
const addnaturalIngradient = require("./naturalIngradients/addnaturalIngradient");
const addInspirationalStory = require("./inspirationalStories/addInspirationalStory");
const editInspirationalStory = require("./inspirationalStories/editInspirationalStory");
const deleteInspirationalStory = require("./inspirationalStories/deleteInspirationalStory");
const updateUserProfile = require("./users/updateUserProfile");

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
  getProfileData,
  addnaturalIngradient,
  addHealthCareVideo,
  addArticle,
  addActivity,
  addInspirationalStory,
  editInspirationalStory,
  deleteInspirationalStory,
  updateUserProfile,
};
