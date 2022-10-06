const { getUserByEmailQuery } = require("../../database/queries");

const getProfileData = async (req, res) => {
  try {
    const result = await await getUserByEmailQuery(req.params.email);
    if (result.rowCount) {
      return res.json({ data: result.rows });
    } else {
      return res.status(400).json({ message: "Invalid Email" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Invalid Email" });
  }
};

module.exports = getProfileData;
