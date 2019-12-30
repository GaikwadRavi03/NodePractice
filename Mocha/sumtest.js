var assert = require('assert');
var sum = require('./sum');

describe('Sum of two no test', function(){
	it('should return sum of two no.', function(){
	assert.equal(sum(2,2),4);
});
	it('should return null when takes nothing null.', function(){
	assert.equal(sum(),0);
});
	 it('should return sum of two numbers', function(){
        assert.equal(sum(10,30),40);
});
});
