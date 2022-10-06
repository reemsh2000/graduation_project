const { addActivityQuery } = require("../../database/queries");

const addActivity = async (req, res) => {
  const { name, burnt_calories, url } = req.body;
  try {
    await addActivityQuery(name, burnt_calories, url);
    return res.status(201).json({ message: "Activity added successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = addActivity;
