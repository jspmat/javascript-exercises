function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	let sum = array.reduce(function(total, element) {
		return total + element;
	}, 0);
	return sum;
}

function multiply (array) {
	let factor = array.reduce(function(total, element) {
		return total * element;
	}, 1);
	return factor;
}

function power(a, b) {
	return a**b;
}

function factorial(a) {
	if (a == 0 || a == 1) return 1;
	return factorial(a-1) * a;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}