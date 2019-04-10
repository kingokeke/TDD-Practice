function concatenate(a, b) {
	if (typeof a !== 'string' || typeof b !== 'string') return 'Error. Invalid input';
	return a + b;
}
module.exports = concatenate;
