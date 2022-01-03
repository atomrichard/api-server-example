module.exports = {
	defaultServerResponse: {
		status: 400,
		message: '',
		body: {}
	},
	nonUserObjectMessage: {
		NONUSEROBJECT_CREATED: 'NonUserObject Created Successfully',
		NONUSEROBJECT_FETCHED: 'NonUserObject(s) Fetched Successfully',
		NONUSEROBJECT_UPDATED: 'NonUserObject updated Successfully',
		NONUSEROBJECT_DELETED: 'NonUserObject deleted Successfully',
		NONUSEROBJECT_NOT_FOUND: 'NonUserObject not found'
	},
	userMessage: {
		USER_CREATED: 'User Created Successfully',
		USER_FETCHED: 'User(s) Fetched Successfully',
		USER_UPDATED: 'User updated Successfully',
		USER_DELETED: 'User deleted Successfully',
		USER_NOT_FOUND: 'User not found',
		PW_NOT_VALID: 'Password is not valid',
		USER_LOGGEDIN: 'Logged in',
		DUPLICATE_EMAIL: 'This email address is already in the db'
	},
	requestValidationMessages: {
		BAD_REQUEST: 'Invalid fields',
		TOKEN_MISSING: 'Token is missing'
	},
	databaseMessage: {
		INVALID_ID: 'Invalid ID'
	}
}
