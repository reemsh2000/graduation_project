const { getActivitiesQuery } = require("../../database/queries");

const getActivities = async (req, res) => {
  try {
    const result = await getActivitiesQuery();
    if (result.rowCount) {
      return res.json({ data: result.rows });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = getActivities;
