exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, exports) {

//console.log('start'); // ReferenceError: global is not defined


// приметивы
console.log(typeof 'true'); // вернер string - обычный  тип данных
// все что возращает не  typeof object - этоприметив


// Объекты 
console.log(typeof new Boolean()); // вернер object


console.log(typeof null); // object
console.log(typeof undefined); // undefined

// литерал и приметив
// ''
// литерал но не приметив
// [56,56,888]

// массив букв
new String('fasdfd');
console.log(new String('fasdfd'));
new String('fasdfd'[4]);

console.log(false, new Boolean(false));

// бинарный оператор
// x operator x

// 1++*2

result = vale;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L1dPUksvU2lnbWEvUHJvamVjdHNfU2lnbWEvZnJvbnRlbmQtanMtZnVuY3Rpb25zL3NyY1xcaW5kZXguanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkJvb2xlYW4iLCJ1bmRlZmluZWQiLCJTdHJpbmciLCJyZXN1bHQiLCJ2YWxlIiwic2V0SW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFJQTtBQUNBQSxRQUFRQyxHQUFSLENBQVksT0FBTyxNQUFuQixFLENBQTRCO0FBQzVCOzs7QUFHQTtBQUNBRCxRQUFRQyxHQUFSLENBQVksT0FBTyxJQUFJQyxPQUFKLEVBQW5CLEUsQ0FBaUM7OztBQUdqQ0YsUUFBUUMsR0FBUixDQUFZLE9BQU8sSUFBbkIsRSxDQUEwQjtBQUMxQkQsUUFBUUMsR0FBUixDQUFZLE9BQU9FLFNBQW5CLEUsQ0FBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSUMsTUFBSixDQUFXLFFBQVg7QUFDQUosUUFBUUMsR0FBUixDQUFZLElBQUlHLE1BQUosQ0FBVyxRQUFYLENBQVo7QUFDQSxJQUFJQSxNQUFKLENBQVcsU0FBUyxDQUFULENBQVg7O0FBR0FKLFFBQVFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CLElBQUlDLE9BQUosQ0FBWSxLQUFaLENBQW5COztBQUVBO0FBQ0E7O0FBRUE7O0FBRUFHLFNBQVVDLElBQVY7O0FBS0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7Ozs7O0FBS0E7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBTixRQUFRQyxHQUFSLENBQVksUUFBWjs7QUFFQTtBQUNBO0FBQ0FNLFlBQVksWUFBWSxDQUFFLENBQTFCLEVBQTRCLEVBQTVCLEUiLCJmaWxlIjoiMC42NTJiNjFiM2NkM2NlMGMxZDI4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb25zb2xlLmxvZygnc3RhcnQnKTsgLy8gUmVmZXJlbmNlRXJyb3I6IGdsb2JhbCBpcyBub3QgZGVmaW5lZFxuXG5cblxuLy8g0L/RgNC40LzQtdGC0LjQstGLXG5jb25zb2xlLmxvZyh0eXBlb2YgJ3RydWUnKTsgLy8g0LLQtdGA0L3QtdGAIHN0cmluZyAtINC+0LHRi9GH0L3Ri9C5ICDRgtC40L8g0LTQsNC90L3Ri9GFXG4vLyDQstGB0LUg0YfRgtC+INCy0L7Qt9GA0LDRidCw0LXRgiDQvdC1ICB0eXBlb2Ygb2JqZWN0IC0g0Y3RgtC+0L/RgNC40LzQtdGC0LjQslxuXG5cbi8vINCe0LHRitC10LrRgtGLIFxuY29uc29sZS5sb2codHlwZW9mIG5ldyBCb29sZWFuKTsgLy8g0LLQtdGA0L3QtdGAIG9iamVjdFxuXG5cbmNvbnNvbGUubG9nKHR5cGVvZiBudWxsKTsgLy8gb2JqZWN0XG5jb25zb2xlLmxvZyh0eXBlb2YgdW5kZWZpbmVkKTsgLy8gdW5kZWZpbmVkXG5cbi8vINC70LjRgtC10YDQsNC7INC4INC/0YDQuNC80LXRgtC40LJcbi8vICcnXG4vLyDQu9C40YLQtdGA0LDQuyDQvdC+INC90LUg0L/RgNC40LzQtdGC0LjQslxuLy8gWzU2LDU2LDg4OF1cblxuLy8g0LzQsNGB0YHQuNCyINCx0YPQutCyXG5uZXcgU3RyaW5nKCdmYXNkZmQnKTtcbmNvbnNvbGUubG9nKG5ldyBTdHJpbmcoJ2Zhc2RmZCcpKTtcbm5ldyBTdHJpbmcoJ2Zhc2RmZCdbNF0pO1xuXG5cbmNvbnNvbGUubG9nKGZhbHNlLCBuZXcgQm9vbGVhbihmYWxzZSkpO1xuXG4vLyDQsdC40L3QsNGA0L3Ri9C5INC+0L/QtdGA0LDRgtC+0YBcbi8vIHggb3BlcmF0b3IgeFxuXG4vLyAxKysqMlxuXG5yZXN1bHQgPSAodmFsZSlcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vKlxuXG4vLyBOQU4gINC+0L0g0L3QtSDRgNCw0LLQtdC9INC90LjRh9C10LzRgywg0LTQsNC20LUg0YHQsNC80L7QvNGDINGB0LXQsdC1XG5jb25zb2xlLmxvZygxICogJ2ZmZmZmJyk7IFxuXG4vLyDQvtCx0YrQtdC60YIgKNC/0LDRgNCwINC60LvRjtGHOiDQt9C90LDRh9C10L3QuNC1KSBcbi8vINGN0YLQviDQutCw0Log0LrQvtC90YLQtdC50L3QtdGAINC00LvRjyDQutC+0L3RgtC10LrRgdGC0L3Ri9GFINC/0LXRgNC10LzQtdC90L3Ri9C1ICBcbmxldCBodW1lbiA9IHtcblx0bmFtZTogJ1NoYXduJyxcblx0YWdlOiAzMFxufTtcbmNvbnNvbGUubG9nKGh1bWVuLm5hbWUpO1xuXG5cbmxldCBwZW9wbGVzID0gW1xuXHR7XG5cdFx0bmFtZTogJ1NoYXduJyxcblx0XHRhZ2U6IDMwXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnZmZmJyxcblx0XHRhZ2U6IDMwXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnc2Rhc2QnLFxuXHRcdGFnZTogMjVcblx0fVxuXTtcbmNvbnNvbGUubG9nKHBlb3BsZVsxXS5uYW1lKTtcbmNvbnNvbGUubG9nKHBlb3BsZVsxXS5hZGQoaGVpZ2h0KSk7XG5cblxuLy8g0LIg0LzQsNGB0YHQuNCy0LDRhSDQvNC+0LbQvdC+INGF0YDQsNC90LjRgtGMINC70Y7QsdC+0Lkg0YLQuNC/INC00LDQvdC90YvRhVxubGV0IG51bWJlcnMgPSBbMjUsIDU1LCA4OCwgJ3Jnc2RmZ3MnXTtcbmNvbnNvbGUubG9nKG51bWJlcnNbMF0pO1xuY29uc29sZS5sb2cobnVtYmVyc1syXSk7IC8vINGN0LvQtdC80LXQvdGCINGBINC40L3QtNC10LrRgdC+0LwgMiAhXG5cbi8vINC80LDRgdGB0LjQsiDQvNCw0YHRgdC40LLQvtCyXG5sZXQgbnVtYmVycyA9IFsgWzI1LCA1NSwgODhdLCBbNjU2LCA5OSwgMjJdIF07XG5jb25zb2xlLmxvZyhudW1iZXJzWzBdWzBdKTsgLy8gXG5jb25zb2xlLmxvZyhudW1iZXJzWzBdWzBdICsgNTU1KTsgXG5cbmxldCB2YWx1ZSA9IG51bWJlcnM7XG5jb25zb2xlLmxvZyh2YWx1ZVsyXSk7XG5cbi8vINGH0LDRgdGC0LjRh9C90L7QtSDQv9GA0LjQvNC10L3QtdC90LjQtVxuYWRkKDU1NSkoNTUpO1xuXG5sZXQgdmFsdWUgPSA4ODsgLy8g0L/QvtC0INC60L7Qv9C+0YLQvtC8INC40YHQvy4gbmV3IE51bWJlclxuLy8g0YLQsNC60L7QtSDQvtCx0YrRj9Cy0LvQtdC90LjQtSDQv9C+0YfRgtC4INGC0L7QttC1INGB0LDQvNC+0LUsINC90L4g0L3QtSDRgdC+0LLRgdC10LxcbmxldCB2YWx1ZSA9IG5ldyBOdW1iZXIoODgpO1xuXG5jb25zb2xlLmxvZyhuZXcgRGF0ZSgpKTtcbtGPXG4vLyDRgNC10LPRg9C70Y/RgNC90YvQtSDQstGL0YDQsNC20LXQvdC4XG4vLyDQvdCw0LnRgtC4INCy0YHQtSDQsdGD0LrQstGLINCyINC90LjQttC90LXQvCDRgNC10LPQuNGB0YLRgNC1IFxuLy8gKyDQvNC40L3QuNC80YPQvCDQvtC00L3Rg1xuLy8gezEtM30gINC+0YIg0L7QtNC90L7Qs9C+INC00L4gM1xuY29uc29sZS5sb2coL1thLXpdKy8pO1xuY29uc29sZS5sb2coL1thLXpdezEtM30vKTtcblxubGV0IGxvd2VyY2FzZUNoYXJhY3RlciA9ICdbYS16XSsnO1xuXG4vLyBlbWFpbCByZWdleHBcblxuY29uc29sZS5sb2cobnVsbCk7XG5cbmNvbnNvbGUubG9nKHRydWUpO1xuY29uc29sZS5sb2coZmFsc2UpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyDQv9GA0LDQstC00LjQstC+XG5pZihmZGFzZGZhKXtcblx0Y29uc29sZS5sb2coJ3RydWV0aHknKTtcbn1cbi8vINC70L7QttC90L5cbmlmKCcnKXtcblx0Y29uc29sZS5sb2coJ3RydWV0aHknKTtcbn1cbi8vIHZhbHVlIC0g0LLRi9GH0LjRgdC70Y/QtdGC0YzRgdGPINGA0LDQvdGM0YjQtVxuaWYodmFsdWUpe1xuXHRjb25zb2xlLmxvZygndHJ1ZXRoeScpO1xufVxuXG4qL1xuXG5cbi8qXG5cbidzZGYgc2RmYSBhZiAgZGZhc2RmIHNkZidcblxuIC8vINC90YPQttC90L4g0Y3QutGA0LDQvdC40YDQvtCy0LDRgtGMKNGB0YLQsNC90LXRgiDRgdC/0LXRhi7RgdC40LzQstC+0LvQvtC8KSBcbi8vINC40LvQuCDQsNC/0L7RgdGC0YDQvtCyINC40LvQuCDQuNGB0L8uINCx0Y3QutGC0LjQutC4LCBcbi8vINC40LvQuCDQtNCy0L7QudC90YvQtSDQutCw0LLRi9GH0LrQuFxuLy8gJ2Rvbid0JzsgXG5cImRvbid0XCI7XG5gZG9uJ3RgO1xuXG4vLyBcXHIgLSDQv9C10YDQtdCy0L7QtCDQutCw0YDQtdGC0LrQuCwg0L/QtdGA0LXQstC+0LTQuNGCINC60YPRgNGB0L7RgCDQvdCw0LfQsNC0XG4vLyBcXG4gLSDQv9C10YDQtdC90L7RgSDQvdCwINC90L7QstGD0Y4g0YHRgtGA0L7QutGDXG5jb25zb2xlLmxvZygnZG9uXFwndCBERmEgQVMgIERGQVNGQVMgIEhnaGZneWhmZ3kgXFxyXFxuIGRmZCAnKTtcblxuY29uc29sZS5sb2coYGRvblxcJ3QgREZhIEFTICBERkFTRkFTICBIZ2hmZ3loZmd5ICBkZmQgYCk7XG4qL1xuXG5cbi8qXG5mdW5jdGlvbiBhZGQobnVtYmVyQSwgbnVtYmVyQikge1xuXHRyZXR1cm4gbnVtYmVyQSArIG51bWJlckI7XG59XG5cbmNvbnNvbGUubG9nKGFkZCgyNTUsMzAwKSk7XG5cbmxldCByZXN1bHQgPSBhZGQoNDUzLDM0NTMpO1xuY29uc29sZS5sb2cocmVzdWx0KTtcblxubGV0IHJlc3VsdCA9IGFkZCg1NDMyMjQsNTYpO1xuY29uc29sZS5sb2cocmVzdWx0KTtcblxubGV0IHJlc3VsdDIgPSBhZGQoNTUsNzcpO1xuY29uc29sZS5sb2cocmVzdWx0KTtcbiovXG5cblxuLypcbnZhciBnbG9iYWw7XG5jb25zb2xlLmxvZyhnbG9iYWwpO1xudmFyIGdsb2JhbCA9IDE7XG4qL1xuLypcbmNvbnNvbGUubG9nKGF2ZXJhZ2UpO1xuXG4vLyDQv9C40YHQsNGC0Ywg0LzQvtC20L3QviDQuCDQutC40YDQuNC70LvQuNGG0LXQuSwg0YLQtdGF0L3QuNGH0LXRgdC60Lgg0YDQsNCx0L7RgtCw0LVcbi8vINC90L4g0LXRgdC70LjQvdGC0LUg0L3QsNGB0YLRgNC+0LXQvdC+ICDRh9GC0L7QsSDQstGL0LTQsNCy0LDQu9C+INC+0YjQuNCx0LrQuFxubGV0INCy0LDQv9GL0LDQsiA9IDQzNDM7XG5cbmZ1bmN0aW9uIGF2ZXJhZ2UgKCkge1xufVxuKi9cblxuXG5cbi8qXG4vLyDQt9Cw0LTQtdC60LvQsNGA0LjRgNC+0LLQsNC70Lgg0YQt0LjRjlxuZnVuY3Rpb24gYXZlcmFnZSAoKSB7IC8vINGB0YDQtdC00L3QtdC1XG5cdGxldCBsb2NhbCA9IDI7XG5cdGdsb2JhbCA9IDEwOyAvLyDQv9C10YDQtdC90LDQt9C90LDRh9C40LwgINGN0YLRgyDQv9C10YDQtdC80LXQvdC90YPRjlxuXHRjb25zb2xlLmxvZyhnbG9iYWwsIGxvY2FsKTtcblxuXHRmdW5jdGlvbiBzdW0gKCkge1xuXHRcdGxldCByZXN1bHQgPSAwO1xuXHR9XG59XG5hdmVyYWdlICgpOyAvLyDRjdGC0Lgg0YHQutC+0LHQutC4INC+0YLQstC10YfQsNGO0YIg0LfQsCDQstGL0LfQvtCyINGELdC40LggY2FsbCBmdW5jdGlvblxuLy8g0YLRg9GCIGxvY2FsINC90LUg0LLQuNC00LXQvdCwXG5jb25zb2xlLmxvZyhnbG9iYWwpO1xuY29uc29sZS5sb2coZ2xvYmFsLCBsb2NhbCk7XG5cbmNvbnNvbGUubG9nKGF2ZXJhZ2UpOyAvLyDQstGL0LLQtdC00LXRgiDRgdC+0LTQtdGA0LbQuNC80L7QtSDRhC3QuNC4XG4qL1xuXG5cblxuLypcbnZhciBudW1iZXJBID0gNDU7XG4vLyBsZXQgbnVtYmVyQSA9IDQ1O1xubGV0IG51bWJlckIgPSA2NTtcbmNvbnN0IG51bWJlckMgPSA4NTtcblxubnVtYmVyQSA9IDM1O1xuY29uc29sZS5sb2cobnVtYmVyQSk7XG5cbm51bWJlckEgPSA1NTtcbmNvbnNvbGUubG9nKG51bWJlckEpO1xuXG5udW1iZXJDID0gNzU7IC8vINGC0YPRgiDQsdGD0LTQtdGCINC+0YjQuNCx0LrQsCAtINC60L7QvdGB0YLQsNC90YMg0L3QtdC70YzQt9GPINC/0LXRgNC10L3QsNC30L3QsNGH0LDRgtGMXG4qL1xuXG5cblxuLy8g0L/QvtGB0LvQtSDQvtGI0LjQsdC60Lgg0YPQttC1INC90LjRh9C10LPQviDQvdC1INCy0YvQstC+0LTQuNGC0YzRgdGPXG5jb25zb2xlLmxvZygnZmluaXNoJyk7XG5cbi8vIGMg0Y3RgtC+0Lkg0YjRgtGD0LrQvtC5INC00LXQsdCw0LPQtdGAINC90LUg0L7RgdGC0LDQvdC+0LLQuNGC0YzRgdGPIEY1XG4vLyDQvNC+0LbQtdC8INCx0LXRgdC60L7QvdC10YfQvdC+INC/0YDQvtCx0L7Qu9C20LDRgtGMINGB0LXRgdGB0LjRjiDQtNC10LHQsNCz0LjQvdCz0LBcbnNldEludGVydmFsKGZ1bmN0aW9uICgpIHt9LCAxMCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==