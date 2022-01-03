const express = require('express');
const router = express.Router();
const nonUserObjectController = require('../controller/nonUserObjectController');
const tokenValidation = require('../middleware/tokenValidaton');

router.post('/', 
	nonUserObjectController.createNonUserObject
);

router.get('/:id', 
	tokenValidation.validateToken,
	nonUserObjectController.getNonUserObjectById
);

router.put('/:id', 
	tokenValidation.validateToken,
	nonUserObjectController.updateNonUserObject
);

router.delete('/:id', 
	tokenValidation.validateToken,
	nonUserObjectController.deleteNonUserObject
);

router.get('/', 
	tokenValidation.validateToken,
	nonUserObjectController.getAllNonUserObjects
);

module.exports = router;