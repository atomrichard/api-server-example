const NonUserObject = require('../database/models/nonUserObjectModel');
const constants = require('../constants');
const { formatMongoData, checkObjectID } = require('../helper/dbHelper');

module.exports.createNonUserObject = async (serviceData) => {

/* 	
	let NonUserObject = new NonUserObject({
		name: serviceData.name,
		aNumber: serviceData.aNumber,
		aString: serviceData.aString
	});
 */

	try {
		let nonUserObject = new NonUserObject({...serviceData});
		let result = await nonUserObject.save();
		return formatMongoData(result);

	} catch (error) {
		console.log('Something went wrong: Service: createNonUserObject', error);
		throw new Error(error);
	}
}

module.exports.getNonUserObjectById = async ({ id }) => {
	
	try {
		checkObjectID(id);

		let nonUserObject = await NonUserObject.findById(id);

		if(!nonUserObject) {
			throw new Error(constants.nonUserObjectMessage.NONUSEROBJECT_NOT_FOUND);
		}
		return formatMongoData(nonUserObject);

	} catch (error) {
		console.log('Something went wrong: Service: getNonUserObjectById', error);
		throw new Error(error);
	}
}

module.exports.updateNonUserObject = async ({ id, updateInfo }) => {
	
	try {
		checkObjectID(id);
		
		let nonUserObject = await NonUserObject.findOneAndUpdate(
			{_id: id},
			updateInfo,
			{new: true}
		);

		if(!nonUserObject) {
			throw new Error(constants.nonUserObjectMessage.NONUSEROBJECT_NOT_FOUND);
		}
		return formatMongoData(nonUserObject);

	} catch (error) {
		console.log('Something went wrong: Service: updateNonUserObject', error);
		throw new Error(error);
	}
}

module.exports.deleteNonUserObject = async ({ id }) => {
	
	try {
		checkObjectID(id);
		
		let nonUserObject = await NonUserObject.findByIdAndDelete(id);

		if(!nonUserObject) {
			throw new Error(constants.nonUserObjectMessage.NONUSEROBJECT_NOT_FOUND);
		}
		return formatMongoData(nonUserObject);

	} catch (error) {
		console.log('Something went wrong: Service: deleteNonUserObject', error);
		throw new Error(error);
	}
}

module.exports.getAllNonUserObjects = async ({skip = 0, limit = 10}) => {
	
	try {
		let nonUserObjects = await NonUserObject.find({}).skip(parseInt(skip)).limit(parseInt(limit));
		return formatMongoData(nonUserObjects);

	} catch (error) {
		console.log('Something went wrong: Service: getAllNonUserObjects', error);
		throw new Error(error);
	}
}