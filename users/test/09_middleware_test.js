const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');
const BlogPost = require('../src/blogPost');

describe('Middleware', () => {
    let joe, blogOne;

    beforeEach((done) => {
        joe = new User({ name: 'Joe'});
        blogOne = new BlogPost({ title: 'JS is Great', content: 'Yep it really is'});

        joe.blogPosts.push(blogOne);

        Promise.all([joe.save(), blogOne.save()])
        .then(() => done());
    });

    it('users clean dangling blogposts on remove', (done) => {
        joe.remove()
        .then(()=> BlogPost.count())
        .then((count) => {
            assert(count === 0);
            done();
        })
    });

});