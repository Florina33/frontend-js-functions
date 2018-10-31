
/******* TASK 1 *******/

var x = 6;
var y = 15;
var z = 4;
var res;

res = x+=y-x++*z;			
console.log('res', res);	// -3

res = z=--x-y*5;
console.log('res', res);	// -79 

res = y/=x+5%z; 			
console.log('res', res);	//  15

res = z=x++ +y*5;			
console.log('res', res);	// 71   

res = x=y-x++*z;			
console.log('res', res);	// 228


/************** function MinNumber **************/

function isNumber(args) {
	let arr = [];

	for (let i = 0; i < args.length; i++) {
		arr[i] = args[i];
	}
	let arrNum = arr.filter(item => typeof item == 'number');

	return arrNum;
}

/***/

export function min(arr) {
	if(!arr){
		return;
	}
	var arrNum = isNumber(arr);
	if(!arrNum.length){
		return;
	}
	
	/*
	var min = arrNum[0];
	var i;
	for(i=0; i < arrNum.length; i++) {
		if(arrNum[i] < min)
		min = arrNum[i];
	}*/
	// or
	var min = arrNum.reduce((min, current) => (min < current ? min : current));

	return min;
}

/************** function MaxNumber **************/

export function max(arr) {
	if(!arr){
		return;
	}
	var arrNum = isNumber(arr);
	if(!arrNum.length){
		return;
	}

	/*
	var max = arrNum[0];
	var i;
	for(i=0; i < arrNum.length; i++) {
		if(arrNum[i] > max)
			max = arrNum[i];
	}*/
	// or
	var max = arrNum.reduce((max, current) => (max > current ? max : current));

	return max;
}

/************** function SumNumbers **************/

export function sum(...args) {
	if(!arguments){
		return 0;
	}

	let arrNum = isNumber(arguments);	
	if(!arrNum.length){
		return 0;
	}

	let sum = 0;

	/*
	var i; 
	for(i=0; i<arrNum.length; i++) {
		if(typeof arrNum[i] == "number")
			sum += arrNum[i];
	}*/
	// or
	sum = arrNum.reduce((sumItems, current) => sumItems + current);

	return sum;
}

// export { min, max, sum };
// setInterval(function () {}, 10);



