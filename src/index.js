
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

function isNumber(arr){
	let arrNum = [];
	if(arr){
		arrNum = arr.filter(item => typeof item == 'number')
	}
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

	var min = arrNum[0];
	var i;
	for(i=0; i < arrNum.length; i++) {
		if(arrNum[i] < min)
		min = arrNum[i];
	}
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

	var i;
	var max = arrNum[0];

	for(i=0; i < arrNum.length; i++) {
		if(arrNum[i] > max)
			max = arrNum[i];
	}
	return max;
}

/************** function SumNumbers **************/

export function sum(...args) {
	if(!arguments){
		return;
	}

	var i; 
	var sum = 0;

	for(i=0; i<arguments.length; i++) {
		if(typeof arguments[i] == "number")
		{
			sum += arguments[i];
		}
	}
	return sum;
}

// export { min, max, sum };

// setInterval(function () {}, 10);



