/*
Задание состоит в том, чтобы создать несколько функций. Весь код нужно написать в файле /src/index.js

min - принимает в качестве аргумента массив и возвращает минимальное значение числа из всех его значений. Если аргумент не передан или в массиве нет чисел, то не возвращает ничего. Если в массиве попадаются не числовые значения, то они игнорируются

max - всё так же как и min, только возвращает максимальное числовое значение из массива

sum принимает не определённое количество аргументов и возвращает их сумму. Нечисловые значения аргументов интерпретируются как 0.
Каждую функцию нужно экспортировать для дальнейшего тестирования. 

Пример:
export function mim () {

}
*/


/******* TASK 1 *******/

/*
Подсчитать в уме результат вывода на экран промемуточных значений переменной res.
*/

var x = 6;
var y = 15;
var z = 4;
var res;

res = x+=y-x++*z;			// 6+=15-24  // постфиксный инкримент x++ выполниться после * но потом x перезапишется в конце
console.log('res', res);	// res = x = -3

res = z=--x-y*5;
console.log('res', res);	// res = z = -79  -->  x = -4

res = y/=x+5%z; 			// 5%-79 = 5  -->  15 /= -4 + 5  -->   15 /= 1
console.log('res', res);	// res = 15

res = z=x++ +y*5;			// постфиксный инкримент x++ выполниться после и перезапишет переменную x
console.log('res', res);	// res = z = 71    x = -3

res = x=y-x++*z;			// 15 - -213
console.log('res', res);	// res = x = 228



/************** function MinNumber **************/

// export function MinNumbers(arr) {  <-- выдает ошибку
function MinNumber(arr) {
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

let minNum = MinNumber([44, 3, -12, '888', 5, -100]);
console.log('\nMinNumber: ', minNum);


/************** function MaxNumber **************/


function MaxNumber(arr) {
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

// let maxNum = MaxNumbers(); // Аргумент не передан
let maxNum = MaxNumber([44, 3, -12, '888', 5, -100]);
console.log('MaxNumber: ', maxNum);


/************** function SumNumbers **************/


// function SumNumbers() {
function SumNumbers(...args) {
	var i; 
	var sum = 0;

	for(i=0; i<arguments.length; i++) {
		if(typeof arguments[i] == 'number')
		{
			// console.log(arguments[i], typeof arguments[i]);
			sum += arguments[i];
		}
		/*
		else{
			sum += 0;
		} */
	}
	return sum;
}

let sumNum = SumNumbers(33, 77, -15, 'dfs', 5, '15', [66,77], `57`);
console.log('SumNumbers: ', sumNum);



/////////////////////


// c этой конструкцие дебагер (F5) не остановиться, можно бесконечно продолжать сессию дебагинга
setInterval(function () {}, 10);

