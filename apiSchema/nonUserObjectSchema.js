const Joi = require('joi');


module.exports.createNonUserObjectSchema = Joi.object().keys({
	name: Joi.string().required(),
	aNumber: Joi.number().required(),
	aString: Joi.string().required()
});

module.exports.getAllNonUserObjectsSchema = Joi.object().keys({
	skip: Joi.string(),
	limit: Joi.string()
});

module.exports.updateNonUserObjectSchema = Joi.object().keys({
	name: Joi.string(),
	aNumber: Joi.number(),
	aString: Joi.string()
});