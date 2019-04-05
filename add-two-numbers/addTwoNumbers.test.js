/* eslint-disable no-undef */

var addTwoNumbers = require('./addTwoNumbers.js');

describe('Add two numbers', function() {
	it('should add two numbers', function() {
		expect(addTwoNumbers(1, 1)).toBe(2);
		expect(addTwoNumbers(-3, 0)).toBe(-3);
		expect(addTwoNumbers(-12, -9)).toBe(-21);
	});
});
