const {
  getUserByEmailQuery,
  updateUserProfileQuery,
} = require("../../database/queries");

const updateUserProfile = async (req, res) => {
  const { email, mobile, height, weight, dob, image } = req.body;
  try {
    const { rows, rowCount } = await await getUserByEmailQuery(email);
    if (rowCount) {
      await updateUserProfileQuery({
        mobile,
        height,
        weight,
        dob,
        image,
        userId: rows[0].id,
      });
      return res.status(201).json({ message: "updated successfully" });
    } else {
      return res.status(404).json({ message: "Invalid Email" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Invalid Email" });
  }
};

module.exports = updateUserProfile;
