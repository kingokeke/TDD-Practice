var addManyNumbers = require('./addManyNumbers.js');
describe('Add many numbers', function() {
	it('should add multiple numbers', function() {
		expect(addManyNumbers(2, 3, 4, 5, 6, 7, 8, 9)).toBe(44);
	});
});
