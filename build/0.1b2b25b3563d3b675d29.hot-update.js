exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, exports) {

console.log(1);

console.log('start');

let global = 1;
// среднее
function average() {
	let local = 2;
	global;
	console.log(global, local);

	function sum() {
		let result = 0;
	}
}

// тут local не видена
console.log(global, local);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L1dPUksvU2lnbWEvUHJvamVjdHNfU2lnbWEvZnJvbnRlbmQtanMtZnVuY3Rpb25zL3NyY1xcaW5kZXguanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImdsb2JhbCIsImF2ZXJhZ2UiLCJsb2NhbCIsInN1bSIsInJlc3VsdCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQUEsUUFBUUMsR0FBUixDQUFZLENBQVo7O0FBRUFELFFBQVFDLEdBQVIsQ0FBWSxPQUFaOztBQUVBLElBQUlDLFNBQVMsQ0FBYjtBQUNBO0FBQ0EsU0FBU0MsT0FBVCxHQUFvQjtBQUNuQixLQUFJQyxRQUFRLENBQVo7QUFDQUY7QUFDQUYsU0FBUUMsR0FBUixDQUFZQyxNQUFaLEVBQW9CRSxLQUFwQjs7QUFFQSxVQUFTQyxHQUFULEdBQWdCO0FBQ2YsTUFBSUMsU0FBUyxDQUFiO0FBQ0E7QUFDRDs7QUFFRDtBQUNBTixRQUFRQyxHQUFSLENBQVlDLE1BQVosRUFBb0JFLEtBQXBCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQUosUUFBUUMsR0FBUixDQUFZLFFBQVo7O0FBRUE7QUFDQTtBQUNBTSxZQUFZLFlBQVksQ0FBRSxDQUExQixFQUE0QixFQUE1QixFIiwiZmlsZSI6IjAuMWIyYjI1YjM1NjNkM2I2NzVkMjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKDEpO1xuXG5jb25zb2xlLmxvZygnc3RhcnQnKTtcblxubGV0IGdsb2JhbCA9IDE7XG4vLyDRgdGA0LXQtNC90LXQtVxuZnVuY3Rpb24gYXZlcmFnZSAoKSB7XG5cdGxldCBsb2NhbCA9IDI7XG5cdGdsb2JhbFxuXHRjb25zb2xlLmxvZyhnbG9iYWwsIGxvY2FsKTtcblxuXHRmdW5jdGlvbiBzdW0gKCkge1xuXHRcdGxldCByZXN1bHQgPSAwO1xuXHR9XG59XG5cbi8vINGC0YPRgiBsb2NhbCDQvdC1INCy0LjQtNC10L3QsFxuY29uc29sZS5sb2coZ2xvYmFsLCBsb2NhbCk7XG5cbi8qXG52YXIgbnVtYmVyQSA9IDQ1O1xuLy8gbGV0IG51bWJlckEgPSA0NTtcbmxldCBudW1iZXJCID0gNjU7XG5jb25zdCBudW1iZXJDID0gODU7XG5cbm51bWJlckEgPSAzNTtcbmNvbnNvbGUubG9nKG51bWJlckEpO1xuXG5udW1iZXJBID0gNTU7XG5jb25zb2xlLmxvZyhudW1iZXJBKTtcblxubnVtYmVyQyA9IDc1OyAvLyDRgtGD0YIg0LHRg9C00LXRgiDQvtGI0LjQsdC60LAgLSDQutC+0L3RgdGC0LDQvdGDINC90LXQu9GM0LfRjyDQv9C10YDQtdC90LDQt9C90LDRh9Cw0YLRjFxuKi9cblxuXG5cbi8vINC/0L7RgdC70LUg0L7RiNC40LHQutC4INGD0LbQtSDQvdC40YfQtdCz0L4g0L3QtSDQstGL0LLQvtC00LjRgtGM0YHRj1xuY29uc29sZS5sb2coJ2ZpbmlzaCcpO1xuXG4vLyBjINGN0YLQvtC5INGI0YLRg9C60L7QuSDQtNC10LHQsNCz0LXRgCDQvdC1INC+0YHRgtCw0L3QvtCy0LjRgtGM0YHRjyBGNVxuLy8g0LzQvtC20LXQvCDQsdC10YHQutC+0L3QtdGH0L3QviDQv9GA0L7QsdC+0LvQttCw0YLRjCDRgdC10YHRgdC40Y4g0LTQtdCx0LDQs9C40L3Qs9CwXG5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7fSwgMTApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=