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

	it('should allow for automatic type coercion of strings containing only an integer type number', function() {
		expect(addTwoNumbers('2', '2')).toBe(4);
		expect(addTwoNumbers('-3', '9')).toBe(6);
		expect(addTwoNumbers('-5', '-7')).toBe(-12);
	});
	it('should allow for addition between a number and a string containing a number', function() {
		expect(addTwoNumbers('2', 7)).toBe(9);
		expect(addTwoNumbers('-3', '9')).toBe(6);
		expect(addTwoNumbers('-5', '-7')).toBe(-12);
	});

	it('should allow for automatic type coercion of strings containing only a floating type number', function() {
		expect(addTwoNumbers('2.2', '9.1')).toBe(11.3);
		expect(addTwoNumbers('-3.7', '4.8')).toBe(1.1);
		expect(addTwoNumbers('-5.5', '-7.3')).toBe(-12.8);
	});

	it('should not add more than 2 operands', function() {
		expect(addTwoNumbers(2, 3, 4)).toBe('Invalid input: You must provide two numbers only.');
		expect(addTwoNumbers(2, 3, 4, 3, 2)).toBe('Invalid input: You must provide two numbers only.');
	});

	it('should not add less than two operands', function() {
		expect(addTwoNumbers(7)).toBe('Invalid input: You must provide two numbers only.');
		expect(addTwoNumbers()).toBe('Invalid input: You must provide two numbers only.');
	});

	it('should not add values that are not numbers or strings that cannot be coerced to numbers', function() {
		expect(addTwoNumbers(2, 'men')).toBe('Invalid input: You must provide two numbers only.');
		expect(addTwoNumbers(8, '2.3b')).toBe('Invalid input: You must provide two numbers only.');
		expect(addTwoNumbers('5', [3])).toBe('Invalid input: You must provide two numbers only.');
		expect(addTwoNumbers(0.7, true)).toBe('Invalid input: You must provide two numbers only.');
		expect(addTwoNumbers({}, -3)).toBe('Invalid input: You must provide two numbers only.');
		expect(addTwoNumbers({id: 5}, -9.4)).toBe('Invalid input: You must provide two numbers only.');
		expect(addTwoNumbers({name: 'Kingsley'}, 4.1)).toBe('Invalid input: You must provide two numbers only.');
	});
});
