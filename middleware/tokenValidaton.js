const constants = require('../constants');
const jwt = require('jsonwebtoken');

module.exports.validateToken = async (req, res, next) => {
	let response = {...constants.defaultServerResponse};
	
	try {
		if(!req.headers.authorization){
			throw new Error(constants.requestValidationMessages.TOKEN_MISSING);
		}
		const token = req.headers.authorization.replace('Bearer ', '');

		const decoded = jwt.verify(token, process.env.SECRET_KEY || 'api@123');
		console.log(decoded);
		return next();

	} catch (error) {
		console.log('Error', error);
		response.message = error.message;
		response.status = 401;
	}
	return res.status(response.status).send(response);
}