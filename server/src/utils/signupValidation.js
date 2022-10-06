const Joi = require("joi");

const signupValidation = Joi.object({
  name: Joi.string().min(4).required(),
  password: Joi.string().min(7).required(),
  confirmPassword: Joi.ref("password"),
  email: Joi.string().email().required(),
}).options({ abortEarly: true });

module.exports = signupValidation;
