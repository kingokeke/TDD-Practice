/* eslint-disable no-undef */

var addTwoNumbers = require('./addTwoNumbers.js');

describe('Add two numbers', function() {
	it('should add two numbers', function() {
		expect(addTwoNumbers(1, 1)).toBe(2);
		expect(addTwoNumbers(-3, 0)).toBe(-3);
		expect(addTwoNumbers(-12, -9)).toBe(-21);
	});

	it('should allow for automatic type coercion of string numbers', function() {
		expect(addTwoNumbers('2', '2')).toBe(4);
		expect(addTwoNumbers('-3', '9')).toBe(6);
		expect(addTwoNumbers('-5', '-7')).toBe(-12);
	});

	it('should not add values that are not numbers or values that cannot be coerced to numbers', function() {
		expect(addTwoNumbers(2, 'men')).toBe(NaN);
	});
});
