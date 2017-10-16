const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Properties of the UserSchema object
const UserSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name is required.']
	},
	postCount: Number
});

//User = Collection name
//represents the entire collection of users data
const User = mongoose.model('user', UserSchema);

module.exports = User;