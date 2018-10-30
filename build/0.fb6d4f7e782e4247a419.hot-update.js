exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, exports) {


console.log('start'); // ReferenceError: global is not defined


function add(numberA, numberB) {
	return numberA + numberB;
}
let result = add(453, 3453);
console.log(add(255, 300));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L1dPUksvU2lnbWEvUHJvamVjdHNfU2lnbWEvZnJvbnRlbmQtanMtZnVuY3Rpb25zL3NyY1xcaW5kZXguanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImFkZCIsIm51bWJlckEiLCJudW1iZXJCIiwicmVzdWx0Iiwic2V0SW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQUEsUUFBUUMsR0FBUixDQUFZLE9BQVosRSxDQUFzQjs7O0FBSXRCLFNBQVNDLEdBQVQsQ0FBYUMsT0FBYixFQUFzQkMsT0FBdEIsRUFBK0I7QUFDOUIsUUFBT0QsVUFBVUMsT0FBakI7QUFDQTtBQUNELElBQUlDLFNBQVNILElBQUksR0FBSixFQUFRLElBQVIsQ0FBYjtBQUNBRixRQUFRQyxHQUFSLENBQVlDLElBQUksR0FBSixFQUFRLEdBQVIsQ0FBWjs7QUFHQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0FGLFFBQVFDLEdBQVIsQ0FBWSxRQUFaOztBQUVBO0FBQ0E7QUFDQUssWUFBWSxZQUFZLENBQUUsQ0FBMUIsRUFBNEIsRUFBNUIsRSIsImZpbGUiOiIwLmZiNmQ0ZjdlNzgyZTQyNDdhNDE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnNvbGUubG9nKCdzdGFydCcpOyAvLyBSZWZlcmVuY2VFcnJvcjogZ2xvYmFsIGlzIG5vdCBkZWZpbmVkXG5cblxuXG5mdW5jdGlvbiBhZGQobnVtYmVyQSwgbnVtYmVyQikge1xuXHRyZXR1cm4gbnVtYmVyQSArIG51bWJlckI7XG59XG5sZXQgcmVzdWx0ID0gYWRkKDQ1MywzNDUzKVxuY29uc29sZS5sb2coYWRkKDI1NSwzMDApKTtcblxuXG4vKlxudmFyIGdsb2JhbDtcbmNvbnNvbGUubG9nKGdsb2JhbCk7XG52YXIgZ2xvYmFsID0gMTtcbiovXG4vKlxuY29uc29sZS5sb2coYXZlcmFnZSk7XG5cbi8vINC/0LjRgdCw0YLRjCDQvNC+0LbQvdC+INC4INC60LjRgNC40LvQu9C40YbQtdC5LCDRgtC10YXQvdC40YfQtdGB0LrQuCDRgNCw0LHQvtGC0LDQtVxuLy8g0L3QviDQtdGB0LvQuNC90YLQtSDQvdCw0YHRgtGA0L7QtdC90L4gINGH0YLQvtCxINCy0YvQtNCw0LLQsNC70L4g0L7RiNC40LHQutC4XG5sZXQg0LLQsNC/0YvQsNCyID0gNDM0MztcblxuZnVuY3Rpb24gYXZlcmFnZSAoKSB7XG59XG4qL1xuXG5cblxuLypcbi8vINC30LDQtNC10LrQu9Cw0YDQuNGA0L7QstCw0LvQuCDRhC3QuNGOXG5mdW5jdGlvbiBhdmVyYWdlICgpIHsgLy8g0YHRgNC10LTQvdC10LVcblx0bGV0IGxvY2FsID0gMjtcblx0Z2xvYmFsID0gMTA7IC8vINC/0LXRgNC10L3QsNC30L3QsNGH0LjQvCAg0Y3RgtGDINC/0LXRgNC10LzQtdC90L3Rg9GOXG5cdGNvbnNvbGUubG9nKGdsb2JhbCwgbG9jYWwpO1xuXG5cdGZ1bmN0aW9uIHN1bSAoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IDA7XG5cdH1cbn1cbmF2ZXJhZ2UgKCk7IC8vINGN0YLQuCDRgdC60L7QsdC60Lgg0L7RgtCy0LXRh9Cw0Y7RgiDQt9CwINCy0YvQt9C+0LIg0YQt0LjQuCBjYWxsIGZ1bmN0aW9uXG4vLyDRgtGD0YIgbG9jYWwg0L3QtSDQstC40LTQtdC90LBcbmNvbnNvbGUubG9nKGdsb2JhbCk7XG5jb25zb2xlLmxvZyhnbG9iYWwsIGxvY2FsKTtcblxuY29uc29sZS5sb2coYXZlcmFnZSk7IC8vINCy0YvQstC10LTQtdGCINGB0L7QtNC10YDQttC40LzQvtC1INGELdC40LhcbiovXG5cblxuXG4vKlxudmFyIG51bWJlckEgPSA0NTtcbi8vIGxldCBudW1iZXJBID0gNDU7XG5sZXQgbnVtYmVyQiA9IDY1O1xuY29uc3QgbnVtYmVyQyA9IDg1O1xuXG5udW1iZXJBID0gMzU7XG5jb25zb2xlLmxvZyhudW1iZXJBKTtcblxubnVtYmVyQSA9IDU1O1xuY29uc29sZS5sb2cobnVtYmVyQSk7XG5cbm51bWJlckMgPSA3NTsgLy8g0YLRg9GCINCx0YPQtNC10YIg0L7RiNC40LHQutCwIC0g0LrQvtC90YHRgtCw0L3RgyDQvdC10LvRjNC30Y8g0L/QtdGA0LXQvdCw0LfQvdCw0YfQsNGC0YxcbiovXG5cblxuXG4vLyDQv9C+0YHQu9C1INC+0YjQuNCx0LrQuCDRg9C20LUg0L3QuNGH0LXQs9C+INC90LUg0LLRi9Cy0L7QtNC40YLRjNGB0Y9cbmNvbnNvbGUubG9nKCdmaW5pc2gnKTtcblxuLy8gYyDRjdGC0L7QuSDRiNGC0YPQutC+0Lkg0LTQtdCx0LDQs9C10YAg0L3QtSDQvtGB0YLQsNC90L7QstC40YLRjNGB0Y8gRjVcbi8vINC80L7QttC10Lwg0LHQtdGB0LrQvtC90LXRh9C90L4g0L/RgNC+0LHQvtC70LbQsNGC0Ywg0YHQtdGB0YHQuNGOINC00LXQsdCw0LPQuNC90LPQsFxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge30sIDEwKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9