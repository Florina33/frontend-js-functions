exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, exports) {


console.log('start'); // ReferenceError: global is not defined


function add(numberA, numberB) {
	return numberA + numberB;
}
let result = add(453);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L1dPUksvU2lnbWEvUHJvamVjdHNfU2lnbWEvZnJvbnRlbmQtanMtZnVuY3Rpb25zL3NyY1xcaW5kZXguanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImFkZCIsIm51bWJlckEiLCJudW1iZXJCIiwicmVzdWx0Iiwic2V0SW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQUEsUUFBUUMsR0FBUixDQUFZLE9BQVosRSxDQUFzQjs7O0FBSXRCLFNBQVNDLEdBQVQsQ0FBYUMsT0FBYixFQUFzQkMsT0FBdEIsRUFBK0I7QUFDOUIsUUFBT0QsVUFBVUMsT0FBakI7QUFDQTtBQUNELElBQUlDLFNBQVNILElBQUksR0FBSixDQUFiO0FBQ0FGLFFBQVFDLEdBQVIsQ0FBWUMsSUFBSSxHQUFKLEVBQVEsR0FBUixDQUFaOztBQUdBOzs7OztBQUtBOzs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOzs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQUYsUUFBUUMsR0FBUixDQUFZLFFBQVo7O0FBRUE7QUFDQTtBQUNBSyxZQUFZLFlBQVksQ0FBRSxDQUExQixFQUE0QixFQUE1QixFIiwiZmlsZSI6IjAuNzMyMjZjZTY0MGVmYzM5ZjhhM2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc29sZS5sb2coJ3N0YXJ0Jyk7IC8vIFJlZmVyZW5jZUVycm9yOiBnbG9iYWwgaXMgbm90IGRlZmluZWRcblxuXG5cbmZ1bmN0aW9uIGFkZChudW1iZXJBLCBudW1iZXJCKSB7XG5cdHJldHVybiBudW1iZXJBICsgbnVtYmVyQjtcbn1cbmxldCByZXN1bHQgPSBhZGQoNDUzLClcbmNvbnNvbGUubG9nKGFkZCgyNTUsMzAwKSk7XG5cblxuLypcbnZhciBnbG9iYWw7XG5jb25zb2xlLmxvZyhnbG9iYWwpO1xudmFyIGdsb2JhbCA9IDE7XG4qL1xuLypcbmNvbnNvbGUubG9nKGF2ZXJhZ2UpO1xuXG4vLyDQv9C40YHQsNGC0Ywg0LzQvtC20L3QviDQuCDQutC40YDQuNC70LvQuNGG0LXQuSwg0YLQtdGF0L3QuNGH0LXRgdC60Lgg0YDQsNCx0L7RgtCw0LVcbi8vINC90L4g0LXRgdC70LjQvdGC0LUg0L3QsNGB0YLRgNC+0LXQvdC+ICDRh9GC0L7QsSDQstGL0LTQsNCy0LDQu9C+INC+0YjQuNCx0LrQuFxubGV0INCy0LDQv9GL0LDQsiA9IDQzNDM7XG5cbmZ1bmN0aW9uIGF2ZXJhZ2UgKCkge1xufVxuKi9cblxuXG5cbi8qXG4vLyDQt9Cw0LTQtdC60LvQsNGA0LjRgNC+0LLQsNC70Lgg0YQt0LjRjlxuZnVuY3Rpb24gYXZlcmFnZSAoKSB7IC8vINGB0YDQtdC00L3QtdC1XG5cdGxldCBsb2NhbCA9IDI7XG5cdGdsb2JhbCA9IDEwOyAvLyDQv9C10YDQtdC90LDQt9C90LDRh9C40LwgINGN0YLRgyDQv9C10YDQtdC80LXQvdC90YPRjlxuXHRjb25zb2xlLmxvZyhnbG9iYWwsIGxvY2FsKTtcblxuXHRmdW5jdGlvbiBzdW0gKCkge1xuXHRcdGxldCByZXN1bHQgPSAwO1xuXHR9XG59XG5hdmVyYWdlICgpOyAvLyDRjdGC0Lgg0YHQutC+0LHQutC4INC+0YLQstC10YfQsNGO0YIg0LfQsCDQstGL0LfQvtCyINGELdC40LggY2FsbCBmdW5jdGlvblxuLy8g0YLRg9GCIGxvY2FsINC90LUg0LLQuNC00LXQvdCwXG5jb25zb2xlLmxvZyhnbG9iYWwpO1xuY29uc29sZS5sb2coZ2xvYmFsLCBsb2NhbCk7XG5cbmNvbnNvbGUubG9nKGF2ZXJhZ2UpOyAvLyDQstGL0LLQtdC00LXRgiDRgdC+0LTQtdGA0LbQuNC80L7QtSDRhC3QuNC4XG4qL1xuXG5cblxuLypcbnZhciBudW1iZXJBID0gNDU7XG4vLyBsZXQgbnVtYmVyQSA9IDQ1O1xubGV0IG51bWJlckIgPSA2NTtcbmNvbnN0IG51bWJlckMgPSA4NTtcblxubnVtYmVyQSA9IDM1O1xuY29uc29sZS5sb2cobnVtYmVyQSk7XG5cbm51bWJlckEgPSA1NTtcbmNvbnNvbGUubG9nKG51bWJlckEpO1xuXG5udW1iZXJDID0gNzU7IC8vINGC0YPRgiDQsdGD0LTQtdGCINC+0YjQuNCx0LrQsCAtINC60L7QvdGB0YLQsNC90YMg0L3QtdC70YzQt9GPINC/0LXRgNC10L3QsNC30L3QsNGH0LDRgtGMXG4qL1xuXG5cblxuLy8g0L/QvtGB0LvQtSDQvtGI0LjQsdC60Lgg0YPQttC1INC90LjRh9C10LPQviDQvdC1INCy0YvQstC+0LTQuNGC0YzRgdGPXG5jb25zb2xlLmxvZygnZmluaXNoJyk7XG5cbi8vIGMg0Y3RgtC+0Lkg0YjRgtGD0LrQvtC5INC00LXQsdCw0LPQtdGAINC90LUg0L7RgdGC0LDQvdC+0LLQuNGC0YzRgdGPIEY1XG4vLyDQvNC+0LbQtdC8INCx0LXRgdC60L7QvdC10YfQvdC+INC/0YDQvtCx0L7Qu9C20LDRgtGMINGB0LXRgdGB0LjRjiDQtNC10LHQsNCz0LjQvdCz0LBcbnNldEludGVydmFsKGZ1bmN0aW9uICgpIHt9LCAxMCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==