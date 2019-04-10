var concatenate = require('./concatenate.js');

describe('Concatenate two strings', function() {
	it('should accept only two parameters', function() {
		expect(concatenate('iron', 'man')).toEqual('ironman');
		expect(concatenate('iron', 'man', 'acles')).toEqual('Error. Invalid input');
		expect(concatenate('iron')).toEqual('Error. Invalid input');
		expect(concatenate()).toEqual('Error. Invalid input');
	});
	it('should accept only strings', function() {
		expect(concatenate('oceans', 11)).toBe('Error. Invalid input');
	});
});
