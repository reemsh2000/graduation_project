const { addnaturalIngradientQuery } = require("../../database/queries");

const addnaturalIngradient = async (req, res) => {
  try {
    const result = await addnaturalIngradientQuery();
    if (result.rowCount) {
      return res.json({ data: result.rows });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = addnaturalIngradient;
