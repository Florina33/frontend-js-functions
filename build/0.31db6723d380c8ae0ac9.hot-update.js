exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, exports) {

console.log('start'); // ReferenceError: global is not defined


// приметивы
console.log(typeof 'true'); // вернер string - обычный  тип данных
// все что возращает не  typeof object - этоприметив


// Объекты 
console.log(typeof new Boolean()); // вернер object


console.log(typeof null); // object
console.log(typeof undefined); // undefined

// литерал и приметив
''
// литерал но не приметив
[(56, 56, 888)];

//
new String(э);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L1dPUksvU2lnbWEvUHJvamVjdHNfU2lnbWEvZnJvbnRlbmQtanMtZnVuY3Rpb25zL3NyY1xcaW5kZXguanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkJvb2xlYW4iLCJ1bmRlZmluZWQiLCJTdHJpbmciLCLRjSIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQUEsUUFBUUMsR0FBUixDQUFZLE9BQVosRSxDQUFzQjs7O0FBSXRCO0FBQ0FELFFBQVFDLEdBQVIsQ0FBWSxPQUFPLE1BQW5CLEUsQ0FBNEI7QUFDNUI7OztBQUdBO0FBQ0FELFFBQVFDLEdBQVIsQ0FBWSxPQUFPLElBQUlDLE9BQUosRUFBbkIsRSxDQUFpQzs7O0FBR2pDRixRQUFRQyxHQUFSLENBQVksT0FBTyxJQUFuQixFLENBQTBCO0FBQzFCRCxRQUFRQyxHQUFSLENBQVksT0FBT0UsU0FBbkIsRSxDQUErQjs7QUFFL0I7QUFDQTtBQUNBO0FBREEsRUFFQyxJQUFHLEVBQUgsRUFBTSxHQUZQOztBQUlBO0FBQ0EsSUFBSUMsTUFBSixDQUFXQyxDQUFYOztBQUtBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOzs7OztBQUtBOzs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOzs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQUwsUUFBUUMsR0FBUixDQUFZLFFBQVo7O0FBRUE7QUFDQTtBQUNBSyxZQUFZLFlBQVksQ0FBRSxDQUExQixFQUE0QixFQUE1QixFIiwiZmlsZSI6IjAuMzFkYjY3MjNkMzgwYzhhZTBhYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdzdGFydCcpOyAvLyBSZWZlcmVuY2VFcnJvcjogZ2xvYmFsIGlzIG5vdCBkZWZpbmVkXG5cblxuXG4vLyDQv9GA0LjQvNC10YLQuNCy0YtcbmNvbnNvbGUubG9nKHR5cGVvZiAndHJ1ZScpOyAvLyDQstC10YDQvdC10YAgc3RyaW5nIC0g0L7QsdGL0YfQvdGL0LkgINGC0LjQvyDQtNCw0L3QvdGL0YVcbi8vINCy0YHQtSDRh9GC0L4g0LLQvtC30YDQsNGJ0LDQtdGCINC90LUgIHR5cGVvZiBvYmplY3QgLSDRjdGC0L7Qv9GA0LjQvNC10YLQuNCyXG5cblxuLy8g0J7QsdGK0LXQutGC0YsgXG5jb25zb2xlLmxvZyh0eXBlb2YgbmV3IEJvb2xlYW4pOyAvLyDQstC10YDQvdC10YAgb2JqZWN0XG5cblxuY29uc29sZS5sb2codHlwZW9mIG51bGwpOyAvLyBvYmplY3RcbmNvbnNvbGUubG9nKHR5cGVvZiB1bmRlZmluZWQpOyAvLyB1bmRlZmluZWRcblxuLy8g0LvQuNGC0LXRgNCw0Lsg0Lgg0L/RgNC40LzQtdGC0LjQslxuJydcbi8vINC70LjRgtC10YDQsNC7INC90L4g0L3QtSDQv9GA0LjQvNC10YLQuNCyXG5bNTYsNTYsODg4XVxuXG4vL1xubmV3IFN0cmluZyjRjSk7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuLypcblxuLy8gTkFOICDQvtC9INC90LUg0YDQsNCy0LXQvSDQvdC40YfQtdC80YMsINC00LDQttC1INGB0LDQvNC+0LzRgyDRgdC10LHQtVxuY29uc29sZS5sb2coMSAqICdmZmZmZicpOyBcblxuLy8g0L7QsdGK0LXQutGCICjQv9Cw0YDQsCDQutC70Y7Rhzog0LfQvdCw0YfQtdC90LjQtSkgXG4vLyDRjdGC0L4g0LrQsNC6INC60L7QvdGC0LXQudC90LXRgCDQtNC70Y8g0LrQvtC90YLQtdC60YHRgtC90YvRhSDQv9C10YDQtdC80LXQvdC90YvQtSAgXG5sZXQgaHVtZW4gPSB7XG5cdG5hbWU6ICdTaGF3bicsXG5cdGFnZTogMzBcbn07XG5jb25zb2xlLmxvZyhodW1lbi5uYW1lKTtcblxuXG5sZXQgcGVvcGxlcyA9IFtcblx0e1xuXHRcdG5hbWU6ICdTaGF3bicsXG5cdFx0YWdlOiAzMFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2ZmZicsXG5cdFx0YWdlOiAzMFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3NkYXNkJyxcblx0XHRhZ2U6IDI1XG5cdH1cbl07XG5jb25zb2xlLmxvZyhwZW9wbGVbMV0ubmFtZSk7XG5jb25zb2xlLmxvZyhwZW9wbGVbMV0uYWRkKGhlaWdodCkpO1xuXG5cbi8vINCyINC80LDRgdGB0LjQstCw0YUg0LzQvtC20L3QviDRhdGA0LDQvdC40YLRjCDQu9GO0LHQvtC5INGC0LjQvyDQtNCw0L3QvdGL0YVcbmxldCBudW1iZXJzID0gWzI1LCA1NSwgODgsICdyZ3NkZmdzJ107XG5jb25zb2xlLmxvZyhudW1iZXJzWzBdKTtcbmNvbnNvbGUubG9nKG51bWJlcnNbMl0pOyAvLyDRjdC70LXQvNC10L3RgiDRgSDQuNC90LTQtdC60YHQvtC8IDIgIVxuXG4vLyDQvNCw0YHRgdC40LIg0LzQsNGB0YHQuNCy0L7QslxubGV0IG51bWJlcnMgPSBbIFsyNSwgNTUsIDg4XSwgWzY1NiwgOTksIDIyXSBdO1xuY29uc29sZS5sb2cobnVtYmVyc1swXVswXSk7IC8vIFxuY29uc29sZS5sb2cobnVtYmVyc1swXVswXSArIDU1NSk7IFxuXG5sZXQgdmFsdWUgPSBudW1iZXJzO1xuY29uc29sZS5sb2codmFsdWVbMl0pO1xuXG4vLyDRh9Cw0YHRgtC40YfQvdC+0LUg0L/RgNC40LzQtdC90LXQvdC40LVcbmFkZCg1NTUpKDU1KTtcblxubGV0IHZhbHVlID0gODg7IC8vINC/0L7QtCDQutC+0L/QvtGC0L7QvCDQuNGB0L8uIG5ldyBOdW1iZXJcbi8vINGC0LDQutC+0LUg0L7QsdGK0Y/QstC70LXQvdC40LUg0L/QvtGH0YLQuCDRgtC+0LbQtSDRgdCw0LzQvtC1LCDQvdC+INC90LUg0YHQvtCy0YHQtdC8XG5sZXQgdmFsdWUgPSBuZXcgTnVtYmVyKDg4KTtcblxuY29uc29sZS5sb2cobmV3IERhdGUoKSk7XG7Rj1xuLy8g0YDQtdCz0YPQu9GP0YDQvdGL0LUg0LLRi9GA0LDQttC10L3QuFxuLy8g0L3QsNC50YLQuCDQstGB0LUg0LHRg9C60LLRiyDQsiDQvdC40LbQvdC10Lwg0YDQtdCz0LjRgdGC0YDQtSBcbi8vICsg0LzQuNC90LjQvNGD0Lwg0L7QtNC90YNcbi8vIHsxLTN9ICDQvtGCINC+0LTQvdC+0LPQviDQtNC+IDNcbmNvbnNvbGUubG9nKC9bYS16XSsvKTtcbmNvbnNvbGUubG9nKC9bYS16XXsxLTN9Lyk7XG5cbmxldCBsb3dlcmNhc2VDaGFyYWN0ZXIgPSAnW2Etel0rJztcblxuLy8gZW1haWwgcmVnZXhwXG5cbmNvbnNvbGUubG9nKG51bGwpO1xuXG5jb25zb2xlLmxvZyh0cnVlKTtcbmNvbnNvbGUubG9nKGZhbHNlKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8g0L/RgNCw0LLQtNC40LLQvlxuaWYoZmRhc2RmYSl7XG5cdGNvbnNvbGUubG9nKCd0cnVldGh5Jyk7XG59XG4vLyDQu9C+0LbQvdC+XG5pZignJyl7XG5cdGNvbnNvbGUubG9nKCd0cnVldGh5Jyk7XG59XG4vLyB2YWx1ZSAtINCy0YvRh9C40YHQu9GP0LXRgtGM0YHRjyDRgNCw0L3RjNGI0LVcbmlmKHZhbHVlKXtcblx0Y29uc29sZS5sb2coJ3RydWV0aHknKTtcbn1cblxuKi9cblxuXG4vKlxuXG4nc2RmIHNkZmEgYWYgIGRmYXNkZiBzZGYnXG5cbiAvLyDQvdGD0LbQvdC+INGN0LrRgNCw0L3QuNGA0L7QstCw0YLRjCjRgdGC0LDQvdC10YIg0YHQv9C10YYu0YHQuNC80LLQvtC70L7QvCkgXG4vLyDQuNC70Lgg0LDQv9C+0YHRgtGA0L7QsiDQuNC70Lgg0LjRgdC/LiDQsdGN0LrRgtC40LrQuCwgXG4vLyDQuNC70Lgg0LTQstC+0LnQvdGL0LUg0LrQsNCy0YvRh9C60Lhcbi8vICdkb24ndCc7IFxuXCJkb24ndFwiO1xuYGRvbid0YDtcblxuLy8gXFxyIC0g0L/QtdGA0LXQstC+0LQg0LrQsNGA0LXRgtC60LgsINC/0LXRgNC10LLQvtC00LjRgiDQutGD0YDRgdC+0YAg0L3QsNC30LDQtFxuLy8gXFxuIC0g0L/QtdGA0LXQvdC+0YEg0L3QsCDQvdC+0LLRg9GOINGB0YLRgNC+0LrRg1xuY29uc29sZS5sb2coJ2RvblxcJ3QgREZhIEFTICBERkFTRkFTICBIZ2hmZ3loZmd5IFxcclxcbiBkZmQgJyk7XG5cbmNvbnNvbGUubG9nKGBkb25cXCd0IERGYSBBUyAgREZBU0ZBUyAgSGdoZmd5aGZneSAgZGZkIGApO1xuKi9cblxuXG4vKlxuZnVuY3Rpb24gYWRkKG51bWJlckEsIG51bWJlckIpIHtcblx0cmV0dXJuIG51bWJlckEgKyBudW1iZXJCO1xufVxuXG5jb25zb2xlLmxvZyhhZGQoMjU1LDMwMCkpO1xuXG5sZXQgcmVzdWx0ID0gYWRkKDQ1MywzNDUzKTtcbmNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbmxldCByZXN1bHQgPSBhZGQoNTQzMjI0LDU2KTtcbmNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbmxldCByZXN1bHQyID0gYWRkKDU1LDc3KTtcbmNvbnNvbGUubG9nKHJlc3VsdCk7XG4qL1xuXG5cbi8qXG52YXIgZ2xvYmFsO1xuY29uc29sZS5sb2coZ2xvYmFsKTtcbnZhciBnbG9iYWwgPSAxO1xuKi9cbi8qXG5jb25zb2xlLmxvZyhhdmVyYWdlKTtcblxuLy8g0L/QuNGB0LDRgtGMINC80L7QttC90L4g0Lgg0LrQuNGA0LjQu9C70LjRhtC10LksINGC0LXRhdC90LjRh9C10YHQutC4INGA0LDQsdC+0YLQsNC1XG4vLyDQvdC+INC10YHQu9C40L3RgtC1INC90LDRgdGC0YDQvtC10L3QviAg0YfRgtC+0LEg0LLRi9C00LDQstCw0LvQviDQvtGI0LjQsdC60LhcbmxldCDQstCw0L/Ri9Cw0LIgPSA0MzQzO1xuXG5mdW5jdGlvbiBhdmVyYWdlICgpIHtcbn1cbiovXG5cblxuXG4vKlxuLy8g0LfQsNC00LXQutC70LDRgNC40YDQvtCy0LDQu9C4INGELdC40Y5cbmZ1bmN0aW9uIGF2ZXJhZ2UgKCkgeyAvLyDRgdGA0LXQtNC90LXQtVxuXHRsZXQgbG9jYWwgPSAyO1xuXHRnbG9iYWwgPSAxMDsgLy8g0L/QtdGA0LXQvdCw0LfQvdCw0YfQuNC8ICDRjdGC0YMg0L/QtdGA0LXQvNC10L3QvdGD0Y5cblx0Y29uc29sZS5sb2coZ2xvYmFsLCBsb2NhbCk7XG5cblx0ZnVuY3Rpb24gc3VtICgpIHtcblx0XHRsZXQgcmVzdWx0ID0gMDtcblx0fVxufVxuYXZlcmFnZSAoKTsgLy8g0Y3RgtC4INGB0LrQvtCx0LrQuCDQvtGC0LLQtdGH0LDRjtGCINC30LAg0LLRi9C30L7QsiDRhC3QuNC4IGNhbGwgZnVuY3Rpb25cbi8vINGC0YPRgiBsb2NhbCDQvdC1INCy0LjQtNC10L3QsFxuY29uc29sZS5sb2coZ2xvYmFsKTtcbmNvbnNvbGUubG9nKGdsb2JhbCwgbG9jYWwpO1xuXG5jb25zb2xlLmxvZyhhdmVyYWdlKTsgLy8g0LLRi9Cy0LXQtNC10YIg0YHQvtC00LXRgNC20LjQvNC+0LUg0YQt0LjQuFxuKi9cblxuXG5cbi8qXG52YXIgbnVtYmVyQSA9IDQ1O1xuLy8gbGV0IG51bWJlckEgPSA0NTtcbmxldCBudW1iZXJCID0gNjU7XG5jb25zdCBudW1iZXJDID0gODU7XG5cbm51bWJlckEgPSAzNTtcbmNvbnNvbGUubG9nKG51bWJlckEpO1xuXG5udW1iZXJBID0gNTU7XG5jb25zb2xlLmxvZyhudW1iZXJBKTtcblxubnVtYmVyQyA9IDc1OyAvLyDRgtGD0YIg0LHRg9C00LXRgiDQvtGI0LjQsdC60LAgLSDQutC+0L3RgdGC0LDQvdGDINC90LXQu9GM0LfRjyDQv9C10YDQtdC90LDQt9C90LDRh9Cw0YLRjFxuKi9cblxuXG5cbi8vINC/0L7RgdC70LUg0L7RiNC40LHQutC4INGD0LbQtSDQvdC40YfQtdCz0L4g0L3QtSDQstGL0LLQvtC00LjRgtGM0YHRj1xuY29uc29sZS5sb2coJ2ZpbmlzaCcpO1xuXG4vLyBjINGN0YLQvtC5INGI0YLRg9C60L7QuSDQtNC10LHQsNCz0LXRgCDQvdC1INC+0YHRgtCw0L3QvtCy0LjRgtGM0YHRjyBGNVxuLy8g0LzQvtC20LXQvCDQsdC10YHQutC+0L3QtdGH0L3QviDQv9GA0L7QsdC+0LvQttCw0YLRjCDRgdC10YHRgdC40Y4g0LTQtdCx0LDQs9C40L3Qs9CwXG5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7fSwgMTApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=