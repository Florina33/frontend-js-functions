/** ************ function MinNumber **************/

function isNumber (args) {
	let arr = [];

	for (let i = 0; i < args.length; i++) {
		arr[i] = args[i];
	}
	let arrNum = arr.filter(item => typeof item === 'number');

	return arrNum;
}

export function min (arr) {
	if (!arr) {
		return;
	}
	let arrNum = isNumber(arr);

	if (!arrNum.length) {
		return;
	}

	let minItem = arrNum.reduce((minCurrent, current) => (minCurrent < current ? minCurrent : current));

	return minItem;
}

/** ************ function MaxNumber **************/

export function max (arr) {
	if (!arr) {
		return;
	}
	let arrNum = isNumber(arr);

	if (!arrNum.length) {
		return;
	}

	let maxItem = arrNum.reduce((maxCurrent, current) => (maxCurrent > current ? maxCurrent : current));

	return maxItem;
}

/** ************ function SumNumbers **************/

export function sum () {
	if (!arguments) {
		return 0;
	}
	let arrNum = isNumber(arguments);

	if (!arrNum.length) {
		return 0;
	}

	let Sum = 0;

	Sum = arrNum.reduce((sumItems, current) => sumItems + current);

	return Sum;
}