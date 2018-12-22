let palindrome = require('../palindrome');

let chai = require('chai');
let expect = chai.expect;

describe('palindrome', function() {

	it('return true if parameter is palindrome', function() {
		expect(palindrome('eye')).to.equal(true);
	});

	it('should strip non-alphanumeric characters', function() {	
		expect(palindrome('_eye')).to.equal(true);
	});

	it('converts string to the same case', function() {
		expect(palindrome('Race--  car')).to.equal(true);
	});
});
