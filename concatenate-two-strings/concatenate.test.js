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
		expect(concatenate('oceans', {suffix: 'eight'})).toBe('Error. Invalid input');
		expect(concatenate('oceans', ['eight', 'eleven'])).toBe('Error. Invalid input');
		expect(concatenate('oceans', null)).toBe('Error. Invalid input');
		expect(concatenate('oceans', undefined)).toBe('Error. Invalid input');
		expect(concatenate('oceans', false)).toBe('Error. Invalid input');
	});
});
