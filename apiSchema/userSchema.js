const Joi = require('joi');


module.exports.createUserSchema = Joi.object().keys({
	email: Joi.string().required(),
	password: Joi.string().required(),
});

module.exports.loginUserSchema = Joi.object().keys({
	email: Joi.string().required(),
	password: Joi.string().required(),
});

module.exports.getAllUserSchema = Joi.object().keys({
	skip: Joi.string(),
	limit: Joi.string()
});

module.exports.updateUserSchema = Joi.object().keys({
	email: Joi.string(),
	password: Joi.string(),
});