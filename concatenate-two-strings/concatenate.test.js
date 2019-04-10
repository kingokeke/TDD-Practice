var concatenate = require('./concatenate.js');

describe('Concatenate two strings', function() {
	it('should accept only two parameters', function() {
		expect(concatenate('iron', 'man')).toEqual('ironman');
	});
});
