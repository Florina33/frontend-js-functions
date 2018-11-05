function isNumber (value) {
	return typeof value === 'number';
}

function getLess (previousValue, currentValue) {
	return previousValue < currentValue ? previousValue : currentValue;
}

function getGreater (previousValue, currentValue) {
	return previousValue > currentValue ? previousValue : currentValue;
}

function getSum (previousValue, currentValue) {
	return previousValue + currentValue;
}

/*********/

function min (arrNumbers = []) {
	if (!arrNumbers) {return undefined;}

	return arrNumbers
		.filter(isNumber)
		.reduce(getLess, undefined);
}

function max (arrNumbers = []) {
	if (!arrNumbers) {return undefined;}

	return arrNumbers
		.filter(isNumber)
		.reduce(getGreater, undefined);
}

function sum (...arrNumbers) {
	if (!arrNumbers) {return 0;}

	return arrNumbers.filter(isNumber)
		.reduce(getSum, 0);
}
// console.log( sum([88, 22, -15]) ); // gives the result: 0

// The correct result when using array arrNumbers[0]
/*
function sum (...arrNumbers) {
	if (!arrNumbers[0]) {return 0;}

	return arrNumbers[0].filter(isNumber)
		.reduce(getSum, 0);
}
*/

export { min, max, sum };