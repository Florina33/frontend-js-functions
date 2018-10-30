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
console.log('MinNumber: ', minNum);


/////////////////////


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


/////////////////////


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

setInterval(function () {}, 10);

