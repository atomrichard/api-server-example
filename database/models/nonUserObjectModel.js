const mongoose = require('mongoose');

const nonUserObjectSchema = new mongoose.Schema({
	name: String,
	aNumber: Number,
	aString: String
}, {
	timestamps: true,
	toObject: {
		transform: function(doc, ret, options) {
			ret.id = ret._id;
			delete ret._id;
			delete ret.__v;
			return ret;
		}
	}
});

module.exports = mongoose.model('NonUserObject', nonUserObjectSchema)