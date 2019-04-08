function addManyNumbers() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] === 'string' && arguments[i] !== '0' && !Number(arguments[i])) {
			return 'Invalid input. Please enter only numbers';
		}
		sum = (sum * 10 + arguments[i] * 10) / 10;
	}
	return sum;
}
module.exports = addManyNumbers;
