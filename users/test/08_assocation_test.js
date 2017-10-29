const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');
const Comment = require('../src/comment');
const BlogPost = require('../src/blogPost');

describe('Associations', () => {
    let joe, blogOne, comment;

    beforeEach((done) => {
        joe = new User({ name: 'Joe'});
        blogOne = new BlogPost({ title: 'JS is Great', content: 'Yep it really is'});
        comment = new Comment({content: 'Congrats on great post!'});

        joe.blogPosts.push(blogOne);
        blogOne.comments.push(comment);
        comment.user = joe;

        Promise.all([joe.save(), blogOne.save(), comment.save()])
            .then(() => done());
    });

    it('saves a relation between a user and a blogpost', (done) => {
        User.findOne({ name: 'Joe'})
            .populate('blogPosts')
            .then((user) => {
                assert(user.blogPosts[0].title === 'JS is Great');
                done();
            });
    });

    it('saves a full relation graph', (done) => {
        User.findOne({name: 'Joe'})
        .populate({
            path: 'blogPosts',
            populate: {
                path: 'comments',
                model: 'comment',
                populate: {
                    path: 'user',
                    model: 'user'
                }
            }
        })
        .then((user) => {
            //really good place for destructuring
            assert(user.name === 'Joe');
            assert(user.blogPosts[0].title === 'JS is Great');
            assert(user.blogPosts[0].comments[0].content === 'Congrats on great post!');
            assert(user.blogPosts[0].comments[0].user.name === 'Joe');
            done();
        })
    })
});