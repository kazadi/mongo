const mongoose = require('mongoose');
const PostSchema = require('./postSchema');
const Schema = mongoose.Schema;


//Properties of the UserSchema object
const UserSchema = new Schema({
	name: {
		type: String,
		validate: {
			validator: (name) => name.length > 2 ,
			message: 'Name must be longer than 2 characters.'
		},
		required: [true, 'Name is required.']
	},
	postCount: Number,
	posts: [PostSchema]
});

//User = Collection name
//represents the entire collection of users data
const User = mongoose.model('user', UserSchema);
module.exports = User;

/*
Notes:
Virtual Type/field/property: refers to any property that 
doesnt get persisted to the mongoDB database
 */