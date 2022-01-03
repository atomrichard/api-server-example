const User = require('../database/models/userModel');
const constants = require('../constants');
const { formatMongoData, checkObjectID } = require('../helper/dbHelper');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.createUser = async ({email, password}) => {
	try {
		const user = await User.findOne({email: email})
		if (user) {
			throw new Error(constants.userMessage.DUPLICATE_EMAIL)
		}
		password = await bcrypt.hash(password, 12);

		const newUser = new User({email: email, password: password});

		let result = await newUser.save();
		return formatMongoData(result);

	} catch (error) {
		console.log('Something went wrong: Service: createUser', error);
		throw new Error(error);
	}
}

module.exports.loginUser = async ({email, password}) => {
	try {
		const user = await User.findOne({email: email})
		if (!user) {
			throw new Error(constants.userMessage.USER_NOT_FOUND)
		}
		const isValid = await bcrypt.compare(password, user.password);
		if (!isValid) {
			throw new Error(constants.userMessage.PW_NOT_VALID)
		}

		const token = jwt.sign({id: user._id}, process.env.SECRET_KEY || 'api@123', { expiresIn: '1d'});

		return { token: token };

	} catch (error) {
		console.log('Something went wrong: Service: createUser', error);
		throw new Error(error);
	}
}
/*
module.exports.getUserById = async ({ id }) => {
	
	try {
		checkObjectID(id);

		let user = await User.findById(id);

		if(!user) {
			throw new Error(constants.userMessage.USER_NOT_FOUND);
		}
		return formatMongoData(user);

	} catch (error) {
		console.log('Something went wrong: Service: getUserById', error);
		throw new Error(error);
	}
}

module.exports.updateUser = async ({ id, updateInfo }) => {
	
	try {
		checkObjectID(id);
		
		let user = await User.findOneAndUpdate(
			{_id: id},
			updateInfo,
			{new: true}
		);

		if(!user) {
			throw new Error(constants.userMessage.USER_NOT_FOUND);
		}
		return formatMongoData(user);

	} catch (error) {
		console.log('Something went wrong: Service: updateUser', error);
		throw new Error(error);
	}
}

module.exports.deleteUser = async ({ id }) => {
	
	try {
		checkObjectID(id);
		
		let user = await User.findByIdAndDelete(id);

		if(!user) {
			throw new Error(constants.userMessage.USER_NOT_FOUND);
		}
		return formatMongoData(user);

	} catch (error) {
		console.log('Something went wrong: Service: deleteUser', error);
		throw new Error(error);
	}
}

module.exports.getAllUsers = async ({skip = 0, limit = 10}) => {
	
	try {
		let users = await User.find({}).skip(parseInt(skip)).limit(parseInt(limit));
		return formatMongoData(users);

	} catch (error) {
		console.log('Something went wrong: Service: getAllUsers', error);
		throw new Error(error);
	}
}

*/