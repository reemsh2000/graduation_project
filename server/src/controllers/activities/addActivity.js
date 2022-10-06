const { addActivityQuery } = require("../../database/queries");

const addActivity = async (req, res) => {
  try {
    const result = await addActivityQuery();
    if (result.rowCount) {
      return res.json({ data: result.rows });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = addActivity;
