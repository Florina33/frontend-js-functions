exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, exports) {

console.log(1);

console.log('start');

let global = 1;

// задекларировали ф-ию
function average() {
	// среднее
	let local = 2;
	global = 10; // переназначим  эту переменную
	console.log(global, local);

	function sum() {
		let result = 0;
	}
}

average(); // эти скобки отвечают за вызов ф-ии
// тут local не видена
console.log(global);
console.log(global, local);

console.log(average); // выведет содержимое п


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L1dPUksvU2lnbWEvUHJvamVjdHNfU2lnbWEvZnJvbnRlbmQtanMtZnVuY3Rpb25zL3NyY1xcaW5kZXguanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImdsb2JhbCIsImF2ZXJhZ2UiLCJsb2NhbCIsInN1bSIsInJlc3VsdCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQUEsUUFBUUMsR0FBUixDQUFZLENBQVo7O0FBRUFELFFBQVFDLEdBQVIsQ0FBWSxPQUFaOztBQUVBLElBQUlDLFNBQVMsQ0FBYjs7QUFFQTtBQUNBLFNBQVNDLE9BQVQsR0FBb0I7QUFBRTtBQUNyQixLQUFJQyxRQUFRLENBQVo7QUFDQUYsVUFBUyxFQUFULENBRm1CLENBRU47QUFDYkYsU0FBUUMsR0FBUixDQUFZQyxNQUFaLEVBQW9CRSxLQUFwQjs7QUFFQSxVQUFTQyxHQUFULEdBQWdCO0FBQ2YsTUFBSUMsU0FBUyxDQUFiO0FBQ0E7QUFDRDs7QUFFREgsVSxDQUFZO0FBQ1o7QUFDQUgsUUFBUUMsR0FBUixDQUFZQyxNQUFaO0FBQ0FGLFFBQVFDLEdBQVIsQ0FBWUMsTUFBWixFQUFvQkUsS0FBcEI7O0FBRUFKLFFBQVFDLEdBQVIsQ0FBWUUsT0FBWixFLENBQXNCOzs7QUFHdEI7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBSCxRQUFRQyxHQUFSLENBQVksUUFBWjs7QUFFQTtBQUNBO0FBQ0FNLFlBQVksWUFBWSxDQUFFLENBQTFCLEVBQTRCLEVBQTVCLEUiLCJmaWxlIjoiMC5iNjg1NmI5ZTJmNmVhZWQzMDM4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coMSk7XG5cbmNvbnNvbGUubG9nKCdzdGFydCcpO1xuXG5sZXQgZ2xvYmFsID0gMTtcblxuLy8g0LfQsNC00LXQutC70LDRgNC40YDQvtCy0LDQu9C4INGELdC40Y5cbmZ1bmN0aW9uIGF2ZXJhZ2UgKCkgeyAvLyDRgdGA0LXQtNC90LXQtVxuXHRsZXQgbG9jYWwgPSAyO1xuXHRnbG9iYWwgPSAxMDsgLy8g0L/QtdGA0LXQvdCw0LfQvdCw0YfQuNC8ICDRjdGC0YMg0L/QtdGA0LXQvNC10L3QvdGD0Y5cblx0Y29uc29sZS5sb2coZ2xvYmFsLCBsb2NhbCk7XG5cblx0ZnVuY3Rpb24gc3VtICgpIHtcblx0XHRsZXQgcmVzdWx0ID0gMDtcblx0fVxufVxuXG5hdmVyYWdlICgpOyAvLyDRjdGC0Lgg0YHQutC+0LHQutC4INC+0YLQstC10YfQsNGO0YIg0LfQsCDQstGL0LfQvtCyINGELdC40Lhcbi8vINGC0YPRgiBsb2NhbCDQvdC1INCy0LjQtNC10L3QsFxuY29uc29sZS5sb2coZ2xvYmFsKTtcbmNvbnNvbGUubG9nKGdsb2JhbCwgbG9jYWwpO1xuXG5jb25zb2xlLmxvZyhhdmVyYWdlKTsgLy8g0LLRi9Cy0LXQtNC10YIg0YHQvtC00LXRgNC20LjQvNC+0LUg0L9cblxuXG4vKlxudmFyIG51bWJlckEgPSA0NTtcbi8vIGxldCBudW1iZXJBID0gNDU7XG5sZXQgbnVtYmVyQiA9IDY1O1xuY29uc3QgbnVtYmVyQyA9IDg1O1xuXG5udW1iZXJBID0gMzU7XG5jb25zb2xlLmxvZyhudW1iZXJBKTtcblxubnVtYmVyQSA9IDU1O1xuY29uc29sZS5sb2cobnVtYmVyQSk7XG5cbm51bWJlckMgPSA3NTsgLy8g0YLRg9GCINCx0YPQtNC10YIg0L7RiNC40LHQutCwIC0g0LrQvtC90YHRgtCw0L3RgyDQvdC10LvRjNC30Y8g0L/QtdGA0LXQvdCw0LfQvdCw0YfQsNGC0YxcbiovXG5cblxuXG4vLyDQv9C+0YHQu9C1INC+0YjQuNCx0LrQuCDRg9C20LUg0L3QuNGH0LXQs9C+INC90LUg0LLRi9Cy0L7QtNC40YLRjNGB0Y9cbmNvbnNvbGUubG9nKCdmaW5pc2gnKTtcblxuLy8gYyDRjdGC0L7QuSDRiNGC0YPQutC+0Lkg0LTQtdCx0LDQs9C10YAg0L3QtSDQvtGB0YLQsNC90L7QstC40YLRjNGB0Y8gRjVcbi8vINC80L7QttC10Lwg0LHQtdGB0LrQvtC90LXRh9C90L4g0L/RgNC+0LHQvtC70LbQsNGC0Ywg0YHQtdGB0YHQuNGOINC00LXQsdCw0LPQuNC90LPQsFxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge30sIDEwKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9