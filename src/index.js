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

export function min (arrNumbers = []) {
	return arrNumbers
		.filter(isNumber)
		.reduce(getLess, undefined);
}

export function max (arrNumbers = []) {
	return arrNumbers
		.filter(isNumber)
		.reduce(getGreater, undefined);
}

export function sum (...arrNumbers) {
	return arrNumbers
		.filter(isNumber)
		.reduce(getSum, 0);
}