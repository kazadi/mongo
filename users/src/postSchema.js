const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String    
});

module.exports = PostSchema;

/*
Notes:

- Post is a Schema and not a Model. It is not a 
Model because it cannot exist on it own. Cannot have
a Post without a User. Post is a subdocument of User.

- Must save entire User in order to save a new Post.
*/