module.exports = {
	readPage(pageNumber) {
		return convertBase(pageNumber, 10, 93);
		// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
		// 52
		// 1234567890-= !@#$%^&*()_+
		// 25
		// ,.<>/?;':"[]{}\|
		// 16
		// total 93
		// 6,956,883,693
		// 2,147,483,647
	},
	findPage() {
	},
}

function hash(n) {
	return n * 23300001  % 33554432;
}
function unHash(h) {
	return h * 32775265 % 33554432;
}
function convertBase(value, fromBase, toBase) {
	let range = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -=!@#$%^&*()_+,.<>/?;:\'"[]{}\\|'.split('');
	let fromRange = range.slice(0, fromBase);
	let toRange = range.slice(0, toBase);
	let decValue = value
		.split('')
		.reverse()
		.reduce((carry, digit, index) => {
			if (fromRange.indexOf(digit) === -1)
				throw new Error('Invalid digit `' + digit + '` for base ' + fromBase + '.');
			return carry += fromRange.indexOf(digit) * (Math.pow(fromBase, index));
		}, 0);
	let new_value = '';
	while (decValue > 0) {
		new_value = toRange[decValue % toBase] + new_value;
		decValue = (decValue - (decValue % toBase)) / toBase;
	}
	return new_value || '0';
}