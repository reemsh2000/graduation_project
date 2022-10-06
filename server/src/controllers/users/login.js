const { compare } = require("bcrypt");
const { getUserByEmailQuery } = require("../../database/queries");
const { loginSchema, asyncSignToken } = require("../../utils");

const login = async (req, res) => {
  await loginSchema.validateAsync(req.body);
  const { rows } = await getUserByEmailQuery(req.body.email);
  if (!rows.length) {
    return res.status(400).json({ message: "Invalid Email or Password" });
  }

  const { id, email, password, isadmin, name } = rows[0];

  const vaildPassword = await compare(req.body.password, password);
  if (!vaildPassword) {
    return res.status(400).json({ message: "Invalid Email or Password" });
  }

  const token = await asyncSignToken({
    id,
    email,
    name,
    isadmin,
  });
  return res
    .status(201)
    .cookie("token", token)
    .json({ message: "You are Logged Successfully" });
};

module.exports = login;
