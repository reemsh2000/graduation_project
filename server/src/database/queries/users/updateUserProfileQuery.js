const connection = require("../../config/connection");

const updateUserProfileQuery = (bodyObject, userId) => {
  const {
    mobile = "",
    height = "",
    weight = "",
    dob = "",
    image = "",
  } = bodyObject;
  console.log({image, weight, height, mobile, dob})
  return connection.query(
    "UPDATE users SET profile_image = $1, weight = $2, height = $3,mobile=$4,dob=$5 WHERE id = $6;",
    [image, weight, height, mobile, dob, userId]
  );
};

module.exports = updateUserProfileQuery;
