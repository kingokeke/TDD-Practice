/* eslint-disable no-undef */

var addTwoNumbers = require('./addTwoNumbers.js');

describe('Add two numbers', function() {
	it('should add two integer type numbers', function() {
		expect(addTwoNumbers(1, 1)).toBe(2);
		expect(addTwoNumbers(-3, 0)).toBe(-3);
		expect(addTwoNumbers(-12, -9)).toBe(-21);
	});

	it('should add two floating type numbers', function() {
		expect(addTwoNumbers(0.1, 0.2)).toBe(0.3);
		expect(addTwoNumbers(0.2, 5)).toBe(5.2);
		expect(addTwoNumbers(-2.4, 2)).toBe(-0.4);
	});

	it('should allow for automatic type coercion of string integer type numbers', function() {
		expect(addTwoNumbers('2', '2')).toBe(4);
		expect(addTwoNumbers('-3', '9')).toBe(6);
		expect(addTwoNumbers('-5', '-7')).toBe(-12);
	});

	it('should allow for automatic type coercion of string floating type numbers', function() {
		expect(addTwoNumbers('2.2', '9.1')).toBe(11.3);
		expect(addTwoNumbers('-3.7', '4.8')).toBe(1.1);
		expect(addTwoNumbers('-5.5', '-7.3')).toBe(-12.8);
	});

	it('should not add values that are not numbers or values that cannot be coerced to numbers', function() {
		expect(addTwoNumbers(2, 'men')).toBe(NaN);
	});

	it('should not add more than 2 operands', function() {
		expect(addTwoNumbers(2, 3, 4)).toBe('Invalid input: Can only add two numbers');
	});
});
