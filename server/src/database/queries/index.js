const getArticlesQuery = require("./articles/getArticlesQuery");
const getActivitiesQuery = require("./activities/getActivitiesQuery");
const getNaturalIngradientsQuery = require("./naturalIngradients/getNaturalIngradientsQuery");
const getHealthCareVideosQuery = require("./healthCareVideos/getHealthCareVideosQuery");
const getInspirationalStoriesQuery = require("./inspirationalStories/getInspirationalStoriesQuery");
const getUserByEmailQuery = require("./users/getUserByEmailQuery");
const insertNewUserQuery = require("./users/insertNewUserQuery");
const addActivityQuery = require("./activities/addActivityQuery");
const addArticleQuery = require("./articles/addArticleQuery");
const addHealthCareVideoQuery = require("./healthCareVideos/addHealthCareVideoQuery");
const addnaturalIngradientQuery = require("./naturalIngradients/addnaturalIngradientQuery");
const addInspirationalStoryQuery = require("./inspirationalStories/addInspirationalStoryQuery");
const deleteInspirationalStoryQuery = require("./inspirationalStories/deleteInspirationalStoryQuery");
const editInspirationalStoryQuery = require("./inspirationalStories/editInspirationalStoryQuery");
const getInspirationalStoryByIdQuery = require("./inspirationalStories/getInspirationalStoryByIdQuery");

module.exports = {
  getArticlesQuery,
  getActivitiesQuery,
  getNaturalIngradientsQuery,
  getHealthCareVideosQuery,
  getInspirationalStoriesQuery,
  getUserByEmailQuery,
  insertNewUserQuery,
  addnaturalIngradientQuery,
  addHealthCareVideoQuery,
  addArticleQuery,
  addActivityQuery,
  addInspirationalStoryQuery,
  deleteInspirationalStoryQuery,
  editInspirationalStoryQuery,
  getInspirationalStoryByIdQuery,
};
