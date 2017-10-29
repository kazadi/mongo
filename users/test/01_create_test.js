const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () =>{
	it('saves a user', (done) => {
		//1. create user 
		const joe = new User({name:'Joe'});
		// 2.save user 
		joe.save()
			.then(()=> {
				// 3.verify w/ code
				// has joe been saved, successfully?
				assert(!joe.isNew);
				done();
			})
	})
});