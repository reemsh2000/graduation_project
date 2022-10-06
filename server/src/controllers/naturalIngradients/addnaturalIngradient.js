const { addnaturalIngradientQuery } = require("../../database/queries");

const addnaturalIngradient = async (req, res) => {
  const { name, calorie, image } = req.body;
  try {
    await addnaturalIngradientQuery(name, calorie, image);
    return res.status(201).json({ message: "added successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = addnaturalIngradient;
