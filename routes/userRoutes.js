const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const userSchema = require('../apiSchema/userSchema');


router.post('/create',
	joiSchemaValidation.validateBody(userSchema.createUserSchema), 
	userController.createUser
);

router.post('/login',
	joiSchemaValidation.validateBody(userSchema.loginUserSchema), 
	userController.loginUser
);

module.exports = router;