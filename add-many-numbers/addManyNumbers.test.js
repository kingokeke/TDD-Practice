/* eslint-disable no-undef */

var addManyNumbers = require('./addManyNumbers.js');

describe('Add many numbers', function() {
	it('should add multiple numbers', function() {
		expect(addManyNumbers(2, 3, 4, 5, 6, 7, 8, 9)).toBe(44);
	});

	it('should add multiple float numbers', function() {
		expect(addManyNumbers(2.7, 9.4, 4.1, 1.9, 3.7, 5.8, 0.0001, 7.5)).toBe(35.1001);
		expect(addManyNumbers(0.1, 0.1, 0.1)).toBe(0.3);
	});
});
