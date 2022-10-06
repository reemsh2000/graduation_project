const connection = require("../../config/connection");

const updateUserProfileQuery = ({
  mobile = "",
  height = "",
  weight = "",
  dob = "",
  image = "",
  userId,
}) =>
  connection.query(
    "UPDATE users SET profile_image = $1, weight = $2, height = $3,mobile=$4,dob=$5 WHERE id = $6;",
    [image, weight, height, mobile, dob, userId]
  );

module.exports = updateUserProfileQuery;
