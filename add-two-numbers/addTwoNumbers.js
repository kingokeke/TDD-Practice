function addTwoNumbers(a, b) {
	if (arguments.length > 2) return 'Invalid input: Can only add two numbers';
	return (Number(a) * 10 + Number(b) * 10) / 10;
}
module.exports = addTwoNumbers;
