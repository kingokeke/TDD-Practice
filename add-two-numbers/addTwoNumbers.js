function addTwoNumbers(a, b) {
	if (arguments.length !== 2) return 'Invalid input: You must provide two numbers only.';
	for (var i = 0; i < 2; i++) {
		if (typeof arguments[i] === 'object' || typeof arguments[i] === 'boolean' || Number.isNaN(Number(arguments[i]))) {
			return 'Invalid input: You must provide two numbers only.';
		}
	}
	return (Number(a) * 10 + Number(b) * 10) / 10;
}
module.exports = addTwoNumbers;
