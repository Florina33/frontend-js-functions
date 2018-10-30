exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, exports) {

console.log('start'); // ReferenceError: global is not defined


// приметивы
console.log(typeof 'true'); // вернер  обычный  тип банных
// все что возращает не  typeof object - этоприметив


// Объекты 
console.log(typeof new Boolean()); // вернер object


console.log(typeof null); // object
console.log(typeof undefined); // undefined


////////////////////////////////


/*

// NAN  он не равен ничему, даже самому себе
console.log(1 * 'fffff'); 

// объект (пара ключ: значение) 
// это как контейнер для контекстных переменные  
let humen = {
	name: 'Shawn',
	age: 30
};
console.log(humen.name);


let peoples = [
	{
		name: 'Shawn',
		age: 30
	},
	{
		name: 'fff',
		age: 30
	},
	{
		name: 'sdasd',
		age: 25
	}
];
console.log(people[1].name);
console.log(people[1].add(height));


// в массивах можно хранить любой тип данных
let numbers = [25, 55, 88, 'rgsdfgs'];
console.log(numbers[0]);
console.log(numbers[2]); // элемент с индексом 2 !

// массив массивов
let numbers = [ [25, 55, 88], [656, 99, 22] ];
console.log(numbers[0][0]); // 
console.log(numbers[0][0] + 555); 

let value = numbers;
console.log(value[2]);

// частичное применение
add(555)(55);

let value = 88; // под копотом исп. new Number
// такое объявление почти тоже самое, но не совсем
let value = new Number(88);

console.log(new Date());
я
// регулярные выражени
// найти все буквы в нижнем регистре 
// + минимум одну
// {1-3}  от одного до 3
console.log(/[a-z]+/);
console.log(/[a-z]{1-3}/);

let lowercaseCharacter = '[a-z]+';

// email regexp

console.log(null);

console.log(true);
console.log(false);

///////////////////////

// правдиво
if(fdasdfa){
	console.log('truethy');
}
// ложно
if(''){
	console.log('truethy');
}
// value - вычисляеться раньше
if(value){
	console.log('truethy');
}

*/

/*

'sdf sdfa af  dfasdf sdf'

 // нужно экранировать(станет спец.символом) 
// или апостров или исп. бэктики, 
// или двойные кавычки
// 'don't'; 
"don't";
`don't`;

// \r - перевод каретки, переводит курсор назад
// \n - перенос на новую строку
console.log('don\'t DFa AS  DFASFAS  Hghfgyhfgy \r\n dfd ');

console.log(`don\'t DFa AS  DFASFAS  Hghfgyhfgy  dfd `);
*/

/*
function add(numberA, numberB) {
	return numberA + numberB;
}

console.log(add(255,300));

let result = add(453,3453);
console.log(result);

let result = add(543224,56);
console.log(result);

let result2 = add(55,77);
console.log(result);
*/

/*
var global;
console.log(global);
var global = 1;
*/
/*
console.log(average);

// писать можно и кириллицей, технически работае
// но еслинте настроено  чтоб выдавало ошибки
let вапыав = 4343;

function average () {
}
*/

/*
// задекларировали ф-ию
function average () { // среднее
	let local = 2;
	global = 10; // переназначим  эту переменную
	console.log(global, local);

	function sum () {
		let result = 0;
	}
}
average (); // эти скобки отвечают за вызов ф-ии call function
// тут local не видена
console.log(global);
console.log(global, local);

console.log(average); // выведет содержимое ф-ии
*/

/*
var numberA = 45;
// let numberA = 45;
let numberB = 65;
const numberC = 85;

numberA = 35;
console.log(numberA);

numberA = 55;
console.log(numberA);

numberC = 75; // тут будет ошибка - констану нельзя переназначать
*/

// после ошибки уже ничего не выводиться
console.log('finish');

// c этой штукой дебагер не остановиться F5
// можем бесконечно проболжать сессию дебагинга
setInterval(function () {}, 10);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L1dPUksvU2lnbWEvUHJvamVjdHNfU2lnbWEvZnJvbnRlbmQtanMtZnVuY3Rpb25zL3NyY1xcaW5kZXguanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkJvb2xlYW4iLCJ1bmRlZmluZWQiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLFFBQVFDLEdBQVIsQ0FBWSxPQUFaLEUsQ0FBc0I7OztBQUl0QjtBQUNBRCxRQUFRQyxHQUFSLENBQVksT0FBTyxNQUFuQixFLENBQTRCO0FBQzVCOzs7QUFHQTtBQUNBRCxRQUFRQyxHQUFSLENBQVksT0FBTyxJQUFJQyxPQUFKLEVBQW5CLEUsQ0FBaUM7OztBQUdqQ0YsUUFBUUMsR0FBUixDQUFZLE9BQU8sSUFBbkIsRSxDQUEwQjtBQUMxQkQsUUFBUUMsR0FBUixDQUFZLE9BQU9FLFNBQW5CLEUsQ0FBK0I7OztBQUsvQjs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0FILFFBQVFDLEdBQVIsQ0FBWSxRQUFaOztBQUVBO0FBQ0E7QUFDQUcsWUFBWSxZQUFZLENBQUUsQ0FBMUIsRUFBNEIsRUFBNUIsRSIsImZpbGUiOiIwLjVjNDAyZTQwZThmY2UxNjIzNzYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnc3RhcnQnKTsgLy8gUmVmZXJlbmNlRXJyb3I6IGdsb2JhbCBpcyBub3QgZGVmaW5lZFxuXG5cblxuLy8g0L/RgNC40LzQtdGC0LjQstGLXG5jb25zb2xlLmxvZyh0eXBlb2YgJ3RydWUnKTsgLy8g0LLQtdGA0L3QtdGAICDQvtCx0YvRh9C90YvQuSAg0YLQuNC/INCx0LDQvdC90YvRhVxuLy8g0LLRgdC1INGH0YLQviDQstC+0LfRgNCw0YnQsNC10YIg0L3QtSAgdHlwZW9mIG9iamVjdCAtINGN0YLQvtC/0YDQuNC80LXRgtC40LJcblxuXG4vLyDQntCx0YrQtdC60YLRiyBcbmNvbnNvbGUubG9nKHR5cGVvZiBuZXcgQm9vbGVhbik7IC8vINCy0LXRgNC90LXRgCBvYmplY3RcblxuXG5jb25zb2xlLmxvZyh0eXBlb2YgbnVsbCk7IC8vIG9iamVjdFxuY29uc29sZS5sb2codHlwZW9mIHVuZGVmaW5lZCk7IC8vIHVuZGVmaW5lZFxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbi8qXG5cbi8vIE5BTiAg0L7QvSDQvdC1INGA0LDQstC10L0g0L3QuNGH0LXQvNGDLCDQtNCw0LbQtSDRgdCw0LzQvtC80YMg0YHQtdCx0LVcbmNvbnNvbGUubG9nKDEgKiAnZmZmZmYnKTsgXG5cbi8vINC+0LHRitC10LrRgiAo0L/QsNGA0LAg0LrQu9GO0Yc6INC30L3QsNGH0LXQvdC40LUpIFxuLy8g0Y3RgtC+INC60LDQuiDQutC+0L3RgtC10LnQvdC10YAg0LTQu9GPINC60L7QvdGC0LXQutGB0YLQvdGL0YUg0L/QtdGA0LXQvNC10L3QvdGL0LUgIFxubGV0IGh1bWVuID0ge1xuXHRuYW1lOiAnU2hhd24nLFxuXHRhZ2U6IDMwXG59O1xuY29uc29sZS5sb2coaHVtZW4ubmFtZSk7XG5cblxubGV0IHBlb3BsZXMgPSBbXG5cdHtcblx0XHRuYW1lOiAnU2hhd24nLFxuXHRcdGFnZTogMzBcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdmZmYnLFxuXHRcdGFnZTogMzBcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdzZGFzZCcsXG5cdFx0YWdlOiAyNVxuXHR9XG5dO1xuY29uc29sZS5sb2cocGVvcGxlWzFdLm5hbWUpO1xuY29uc29sZS5sb2cocGVvcGxlWzFdLmFkZChoZWlnaHQpKTtcblxuXG4vLyDQsiDQvNCw0YHRgdC40LLQsNGFINC80L7QttC90L4g0YXRgNCw0L3QuNGC0Ywg0LvRjtCx0L7QuSDRgtC40L8g0LTQsNC90L3Ri9GFXG5sZXQgbnVtYmVycyA9IFsyNSwgNTUsIDg4LCAncmdzZGZncyddO1xuY29uc29sZS5sb2cobnVtYmVyc1swXSk7XG5jb25zb2xlLmxvZyhudW1iZXJzWzJdKTsgLy8g0Y3Qu9C10LzQtdC90YIg0YEg0LjQvdC00LXQutGB0L7QvCAyICFcblxuLy8g0LzQsNGB0YHQuNCyINC80LDRgdGB0LjQstC+0LJcbmxldCBudW1iZXJzID0gWyBbMjUsIDU1LCA4OF0sIFs2NTYsIDk5LCAyMl0gXTtcbmNvbnNvbGUubG9nKG51bWJlcnNbMF1bMF0pOyAvLyBcbmNvbnNvbGUubG9nKG51bWJlcnNbMF1bMF0gKyA1NTUpOyBcblxubGV0IHZhbHVlID0gbnVtYmVycztcbmNvbnNvbGUubG9nKHZhbHVlWzJdKTtcblxuLy8g0YfQsNGB0YLQuNGH0L3QvtC1INC/0YDQuNC80LXQvdC10L3QuNC1XG5hZGQoNTU1KSg1NSk7XG5cbmxldCB2YWx1ZSA9IDg4OyAvLyDQv9C+0LQg0LrQvtC/0L7RgtC+0Lwg0LjRgdC/LiBuZXcgTnVtYmVyXG4vLyDRgtCw0LrQvtC1INC+0LHRitGP0LLQu9C10L3QuNC1INC/0L7Rh9GC0Lgg0YLQvtC20LUg0YHQsNC80L7QtSwg0L3QviDQvdC1INGB0L7QstGB0LXQvFxubGV0IHZhbHVlID0gbmV3IE51bWJlcig4OCk7XG5cbmNvbnNvbGUubG9nKG5ldyBEYXRlKCkpO1xu0Y9cbi8vINGA0LXQs9GD0LvRj9GA0L3Ri9C1INCy0YvRgNCw0LbQtdC90Lhcbi8vINC90LDQudGC0Lgg0LLRgdC1INCx0YPQutCy0Ysg0LIg0L3QuNC20L3QtdC8INGA0LXQs9C40YHRgtGA0LUgXG4vLyArINC80LjQvdC40LzRg9C8INC+0LTQvdGDXG4vLyB7MS0zfSAg0L7RgiDQvtC00L3QvtCz0L4g0LTQviAzXG5jb25zb2xlLmxvZygvW2Etel0rLyk7XG5jb25zb2xlLmxvZygvW2Etel17MS0zfS8pO1xuXG5sZXQgbG93ZXJjYXNlQ2hhcmFjdGVyID0gJ1thLXpdKyc7XG5cbi8vIGVtYWlsIHJlZ2V4cFxuXG5jb25zb2xlLmxvZyhudWxsKTtcblxuY29uc29sZS5sb2codHJ1ZSk7XG5jb25zb2xlLmxvZyhmYWxzZSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vINC/0YDQsNCy0LTQuNCy0L5cbmlmKGZkYXNkZmEpe1xuXHRjb25zb2xlLmxvZygndHJ1ZXRoeScpO1xufVxuLy8g0LvQvtC20L3QvlxuaWYoJycpe1xuXHRjb25zb2xlLmxvZygndHJ1ZXRoeScpO1xufVxuLy8gdmFsdWUgLSDQstGL0YfQuNGB0LvRj9C10YLRjNGB0Y8g0YDQsNC90YzRiNC1XG5pZih2YWx1ZSl7XG5cdGNvbnNvbGUubG9nKCd0cnVldGh5Jyk7XG59XG5cbiovXG5cblxuLypcblxuJ3NkZiBzZGZhIGFmICBkZmFzZGYgc2RmJ1xuXG4gLy8g0L3Rg9C20L3QviDRjdC60YDQsNC90LjRgNC+0LLQsNGC0Ywo0YHRgtCw0L3QtdGCINGB0L/QtdGGLtGB0LjQvNCy0L7Qu9C+0LwpIFxuLy8g0LjQu9C4INCw0L/QvtGB0YLRgNC+0LIg0LjQu9C4INC40YHQvy4g0LHRjdC60YLQuNC60LgsIFxuLy8g0LjQu9C4INC00LLQvtC50L3Ri9C1INC60LDQstGL0YfQutC4XG4vLyAnZG9uJ3QnOyBcblwiZG9uJ3RcIjtcbmBkb24ndGA7XG5cbi8vIFxcciAtINC/0LXRgNC10LLQvtC0INC60LDRgNC10YLQutC4LCDQv9C10YDQtdCy0L7QtNC40YIg0LrRg9GA0YHQvtGAINC90LDQt9Cw0LRcbi8vIFxcbiAtINC/0LXRgNC10L3QvtGBINC90LAg0L3QvtCy0YPRjiDRgdGC0YDQvtC60YNcbmNvbnNvbGUubG9nKCdkb25cXCd0IERGYSBBUyAgREZBU0ZBUyAgSGdoZmd5aGZneSBcXHJcXG4gZGZkICcpO1xuXG5jb25zb2xlLmxvZyhgZG9uXFwndCBERmEgQVMgIERGQVNGQVMgIEhnaGZneWhmZ3kgIGRmZCBgKTtcbiovXG5cblxuLypcbmZ1bmN0aW9uIGFkZChudW1iZXJBLCBudW1iZXJCKSB7XG5cdHJldHVybiBudW1iZXJBICsgbnVtYmVyQjtcbn1cblxuY29uc29sZS5sb2coYWRkKDI1NSwzMDApKTtcblxubGV0IHJlc3VsdCA9IGFkZCg0NTMsMzQ1Myk7XG5jb25zb2xlLmxvZyhyZXN1bHQpO1xuXG5sZXQgcmVzdWx0ID0gYWRkKDU0MzIyNCw1Nik7XG5jb25zb2xlLmxvZyhyZXN1bHQpO1xuXG5sZXQgcmVzdWx0MiA9IGFkZCg1NSw3Nyk7XG5jb25zb2xlLmxvZyhyZXN1bHQpO1xuKi9cblxuXG4vKlxudmFyIGdsb2JhbDtcbmNvbnNvbGUubG9nKGdsb2JhbCk7XG52YXIgZ2xvYmFsID0gMTtcbiovXG4vKlxuY29uc29sZS5sb2coYXZlcmFnZSk7XG5cbi8vINC/0LjRgdCw0YLRjCDQvNC+0LbQvdC+INC4INC60LjRgNC40LvQu9C40YbQtdC5LCDRgtC10YXQvdC40YfQtdGB0LrQuCDRgNCw0LHQvtGC0LDQtVxuLy8g0L3QviDQtdGB0LvQuNC90YLQtSDQvdCw0YHRgtGA0L7QtdC90L4gINGH0YLQvtCxINCy0YvQtNCw0LLQsNC70L4g0L7RiNC40LHQutC4XG5sZXQg0LLQsNC/0YvQsNCyID0gNDM0MztcblxuZnVuY3Rpb24gYXZlcmFnZSAoKSB7XG59XG4qL1xuXG5cblxuLypcbi8vINC30LDQtNC10LrQu9Cw0YDQuNGA0L7QstCw0LvQuCDRhC3QuNGOXG5mdW5jdGlvbiBhdmVyYWdlICgpIHsgLy8g0YHRgNC10LTQvdC10LVcblx0bGV0IGxvY2FsID0gMjtcblx0Z2xvYmFsID0gMTA7IC8vINC/0LXRgNC10L3QsNC30L3QsNGH0LjQvCAg0Y3RgtGDINC/0LXRgNC10LzQtdC90L3Rg9GOXG5cdGNvbnNvbGUubG9nKGdsb2JhbCwgbG9jYWwpO1xuXG5cdGZ1bmN0aW9uIHN1bSAoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IDA7XG5cdH1cbn1cbmF2ZXJhZ2UgKCk7IC8vINGN0YLQuCDRgdC60L7QsdC60Lgg0L7RgtCy0LXRh9Cw0Y7RgiDQt9CwINCy0YvQt9C+0LIg0YQt0LjQuCBjYWxsIGZ1bmN0aW9uXG4vLyDRgtGD0YIgbG9jYWwg0L3QtSDQstC40LTQtdC90LBcbmNvbnNvbGUubG9nKGdsb2JhbCk7XG5jb25zb2xlLmxvZyhnbG9iYWwsIGxvY2FsKTtcblxuY29uc29sZS5sb2coYXZlcmFnZSk7IC8vINCy0YvQstC10LTQtdGCINGB0L7QtNC10YDQttC40LzQvtC1INGELdC40LhcbiovXG5cblxuXG4vKlxudmFyIG51bWJlckEgPSA0NTtcbi8vIGxldCBudW1iZXJBID0gNDU7XG5sZXQgbnVtYmVyQiA9IDY1O1xuY29uc3QgbnVtYmVyQyA9IDg1O1xuXG5udW1iZXJBID0gMzU7XG5jb25zb2xlLmxvZyhudW1iZXJBKTtcblxubnVtYmVyQSA9IDU1O1xuY29uc29sZS5sb2cobnVtYmVyQSk7XG5cbm51bWJlckMgPSA3NTsgLy8g0YLRg9GCINCx0YPQtNC10YIg0L7RiNC40LHQutCwIC0g0LrQvtC90YHRgtCw0L3RgyDQvdC10LvRjNC30Y8g0L/QtdGA0LXQvdCw0LfQvdCw0YfQsNGC0YxcbiovXG5cblxuXG4vLyDQv9C+0YHQu9C1INC+0YjQuNCx0LrQuCDRg9C20LUg0L3QuNGH0LXQs9C+INC90LUg0LLRi9Cy0L7QtNC40YLRjNGB0Y9cbmNvbnNvbGUubG9nKCdmaW5pc2gnKTtcblxuLy8gYyDRjdGC0L7QuSDRiNGC0YPQutC+0Lkg0LTQtdCx0LDQs9C10YAg0L3QtSDQvtGB0YLQsNC90L7QstC40YLRjNGB0Y8gRjVcbi8vINC80L7QttC10Lwg0LHQtdGB0LrQvtC90LXRh9C90L4g0L/RgNC+0LHQvtC70LbQsNGC0Ywg0YHQtdGB0YHQuNGOINC00LXQsdCw0LPQuNC90LPQsFxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge30sIDEwKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9