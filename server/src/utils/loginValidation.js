const Joi = require("joi");

const loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
}).options({ abortEarly: true });

module.exports = loginValidation;
