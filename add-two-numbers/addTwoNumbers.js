function addTwoNumbers(a, b) {
	if (arguments.length !== 2) return 'Invalid input: You must provide two numbers only.';
	if (typeof a === 'object') return 'Invalid input: You must provide two numbers only.';
	if (typeof a === 'boolean') return 'Invalid input: You must provide two numbers only.';
	if (typeof b === 'object') return 'Invalid input: You must provide two numbers only.';
	if (typeof b === 'boolean') return 'Invalid input: You must provide two numbers only.';
	if (Number.isNaN(Number(a))) return 'Invalid input: You must provide two numbers only.';
	if (Number.isNaN(Number(b))) return 'Invalid input: You must provide two numbers only.';

	return (Number(a) * 10 + Number(b) * 10) / 10;
}
module.exports = addTwoNumbers;
