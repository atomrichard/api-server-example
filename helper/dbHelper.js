const mongoose = require('mongoose');
const constants = require('../constants');


module.exports.formatMongoData = (data) => {
	if(Array.isArray(data)){

		let newDataList = [];

		for (const item of data) {
			newDataList.push(item.toObject());
		}
		return newDataList;
	}
	return data.toObject();
}

module.exports.checkObjectID = (id) => {
	if(!mongoose.Types.ObjectId.isValid(id)){
		throw new Error(constants.databaseMessage.INVALID_ID);
	}
}
