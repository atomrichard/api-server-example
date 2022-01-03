const express = require('express');
const router = express.Router();
const nonUserObjectController = require('../controller/nonUserObjectController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const nonUserObjectSchema = require('../apiSchema/nonUserObjectSchema');
const tokenValidation = require('../middleware/tokenValidaton');

router.post('/', 
	joiSchemaValidation.validateBody(nonUserObjectSchema.createNonUserObjectSchema), 
	nonUserObjectController.createNonUserObject
);

router.get('/:id', 
	tokenValidation.validateToken,
	nonUserObjectController.getNonUserObjectById
);

router.put('/:id', 
	tokenValidation.validateToken,
	joiSchemaValidation.validateBody(nonUserObjectSchema.updateNonUserObjectSchema), 
	nonUserObjectController.updateNonUserObject
);

router.delete('/:id', 
	tokenValidation.validateToken,
	nonUserObjectController.deleteNonUserObject
);

router.get('/', 
	tokenValidation.validateToken,
	joiSchemaValidation.validateQueryParams(nonUserObjectSchema.getAllNonUserObjectsSchema), 
	nonUserObjectController.getAllNonUserObjects
);

module.exports = router;