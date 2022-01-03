const nonUserObjectService = require('../services/nonUserObjectService');
const constants = require('../constants');

module.exports.createNonUserObject = async (req, res) => {
	//console.log('body: ', req.body);

	let response = {...constants.defaultServerResponse};

	try {
		const responseFromService = await nonUserObjectService.createNonUserObject(req.body);

		response.status = 200;
		response.message = constants.nonUserObjectMessage.NONUSEROBJECT_CREATED;
		response.body = responseFromService;
		
	} catch (error) {
		console.log('Something went wrong: Controller: createNonUserObject', error);
		response.message = error.message;
	}
	return res.status(response.status).send(response);	
}

module.exports.updateNonUserObject = async (req, res) => {
	//console.log('body: ', req.body);

	let response = {...constants.defaultServerResponse};

	try {
		const responseFromService = await nonUserObjectService.updateNonUserObject({
			id: req.params.id,
			updateInfo: req.body
		});

		response.status = 200;
		response.message = constants.nonUserObjectMessage.NONUSEROBJECT_UPDATED;
		response.body = responseFromService;
		
	} catch (error) {
		console.log('Something went wrong: Controller: updateNonUserObject', error);
		response.message = error.message;
	}
	return res.status(response.status).send(response);	
}

module.exports.deleteNonUserObject = async (req, res) => {
	//console.log('body: ', req.body);

	let response = {...constants.defaultServerResponse};

	try {
		const responseFromService = await nonUserObjectService.deleteNonUserObject(req.params);

		response.status = 200;
		response.message = constants.nonUserObjectMessage.NONUSEROBJECT_DELETED;
		response.body = responseFromService;
		
	} catch (error) {
		console.log('Something went wrong: Controller: deleteNonUserObject', error);
		response.message = error.message;
	}
	return res.status(response.status).send(response);	
}

module.exports.getNonUserObjectById = async (req, res) => {
	//console.log('body: ', req.body);

	let response = {...constants.defaultServerResponse};

	try {
		const responseFromService = await nonUserObjectService.getNonUserObjectById(req.params);

		response.status = 200;
		response.message = constants.nonUserObjectMessage.NONUSEROBJECT_FETCHED;
		response.body = responseFromService;
		
	} catch (error) {
		console.log('Something went wrong: Controller: getNonUserObjectById', error);
		response.message = error.message;
	}
	return res.status(response.status).send(response);	
}

module.exports.getAllNonUserObjects = async (req, res) => {
	//console.log('body: ', req.body);

	let response = {...constants.defaultServerResponse};

	try {
		const responseFromService = await nonUserObjectService.getAllNonUserObjects(req.query);

		response.status = 200;
		response.message = constants.nonUserObjectMessage.NONUSEROBJECT_FETCHED;
		response.body = responseFromService;
		
	} catch (error) {
		console.log('Something went wrong: Controller: getAllNonUserObjects', error);
		response.message = error.message;
	}
	return res.status(response.status).send(response);	
}