function concatenate(a, b) {
	if (arguments.length !== 2 || typeof a !== 'string' || typeof b !== 'string') return 'Error. Invalid input';
	return a + b;
}
module.exports = concatenate;
