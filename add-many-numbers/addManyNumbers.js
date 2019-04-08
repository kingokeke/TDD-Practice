function addManyNumbers() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum = (sum * 10 + arguments[i] * 10) / 10;
	}
	return sum;
}
module.exports = addManyNumbers;
