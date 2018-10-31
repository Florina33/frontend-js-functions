
/******* TASK 1 *******/

/*
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
*/

/************** function MinNumber **************/

function min(arr) {
	if(!arr){
		console.log('Аргумент не передан');
		return;
	}

	var i;
	var min = arr[0];

	for(i=1; i < arr.length; i++) {
		if( (typeof arr[i] == 'number') && (arr[i] < min) )
		min = arr[i];
	}
	return min;
}

// let minNum = MinNumber([44, 3, -12, '888', 5, -100]);
// console.log('\nMinNumber: ', minNum);


/************** function MaxNumber **************/


function max(arr) {
	if(!arr){
		console.log('Аргумент не передан');
		return;
	}

	var i;
	var max = arr[0];

	for(i=1; i < arr.length; i++) {
		if( (typeof arr[i] == 'number') && (arr[i] > max) )
			max = arr[i];
	}
	return max;
}


/************** function SumNumbers **************/

function sum(...args) {
	var i; 
	var sum = 0;

	for(i=0; i<arguments.length; i++) {
		if(typeof arguments[i] == 'number')
		{
			sum += arguments[i];
		}
	}
	return sum;
}

// let sumNum = SumNumbers(33, 77, -15, 'dfs', 5, '15', [66,77], `57`);
// console.log('SumNumbers: ', sumNum);

export { min, max, sum };

// export { MinNumber, MaxNumber, SumNumbers };
// setInterval(function () {}, 10);

