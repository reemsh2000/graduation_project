const {
  getUserByEmailQuery,
  updateUserProfileQuery,
} = require("../../database/queries");

const updateUserProfile = async (req, res) => {
  const { email } = req.body;
  try {
    const { rows, rowCount } = await await getUserByEmailQuery(email);
   console.log({rows, rowCount})
    if (rowCount) {
        console.log("hi")
      const res=await updateUserProfileQuery(req.body,rows[0].id);
      console.log({res})
      return res.status(201).json({ message: "updated successfully" });
    } else {
      return res.status(404).json({ message: "user does not exist" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Invalid Email" });
  }
};

module.exports = updateUserProfile;
