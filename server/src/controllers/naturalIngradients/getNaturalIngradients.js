const { getNaturalIngradientsQuery } = require("../../database/queries");

const getNaturalIngradients = async (req, res) => {
  try {
    const result = await getNaturalIngradientsQuery();
    if (result.rowCount) {
      return res.json({ data: result.rows });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = getNaturalIngradients;
