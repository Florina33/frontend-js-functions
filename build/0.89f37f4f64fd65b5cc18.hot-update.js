exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, exports) {

console.log(1);

console.log('start');

console.log;

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

average(); // эти скобки отвечают за вызов ф-ии call function
// тут local не видена
console.log(global);
console.log(global, local);

console.log(average); // выведет содержимое ф-ии


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L1dPUksvU2lnbWEvUHJvamVjdHNfU2lnbWEvZnJvbnRlbmQtanMtZnVuY3Rpb25zL3NyY1xcaW5kZXguanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImdsb2JhbCIsImF2ZXJhZ2UiLCJsb2NhbCIsInN1bSIsInJlc3VsdCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQUEsUUFBUUMsR0FBUixDQUFZLENBQVo7O0FBRUFELFFBQVFDLEdBQVIsQ0FBWSxPQUFaOztBQUVBRCxRQUFRQyxHQUFSOztBQUVBLElBQUlDLFNBQVMsQ0FBYjs7QUFFQTtBQUNBLFNBQVNDLE9BQVQsR0FBb0I7QUFBRTtBQUNyQixLQUFJQyxRQUFRLENBQVo7QUFDQUYsVUFBUyxFQUFULENBRm1CLENBRU47QUFDYkYsU0FBUUMsR0FBUixDQUFZQyxNQUFaLEVBQW9CRSxLQUFwQjs7QUFFQSxVQUFTQyxHQUFULEdBQWdCO0FBQ2YsTUFBSUMsU0FBUyxDQUFiO0FBQ0E7QUFDRDs7QUFFREgsVSxDQUFZO0FBQ1o7QUFDQUgsUUFBUUMsR0FBUixDQUFZQyxNQUFaO0FBQ0FGLFFBQVFDLEdBQVIsQ0FBWUMsTUFBWixFQUFvQkUsS0FBcEI7O0FBRUFKLFFBQVFDLEdBQVIsQ0FBWUUsT0FBWixFLENBQXNCOzs7QUFHdEI7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBSCxRQUFRQyxHQUFSLENBQVksUUFBWjs7QUFFQTtBQUNBO0FBQ0FNLFlBQVksWUFBWSxDQUFFLENBQTFCLEVBQTRCLEVBQTVCLEUiLCJmaWxlIjoiMC44OWYzN2Y0ZjY0ZmQ2NWI1Y2MxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coMSk7XG5cbmNvbnNvbGUubG9nKCdzdGFydCcpO1xuXG5jb25zb2xlLmxvZ1xuXG5sZXQgZ2xvYmFsID0gMTtcblxuLy8g0LfQsNC00LXQutC70LDRgNC40YDQvtCy0LDQu9C4INGELdC40Y5cbmZ1bmN0aW9uIGF2ZXJhZ2UgKCkgeyAvLyDRgdGA0LXQtNC90LXQtVxuXHRsZXQgbG9jYWwgPSAyO1xuXHRnbG9iYWwgPSAxMDsgLy8g0L/QtdGA0LXQvdCw0LfQvdCw0YfQuNC8ICDRjdGC0YMg0L/QtdGA0LXQvNC10L3QvdGD0Y5cblx0Y29uc29sZS5sb2coZ2xvYmFsLCBsb2NhbCk7XG5cblx0ZnVuY3Rpb24gc3VtICgpIHtcblx0XHRsZXQgcmVzdWx0ID0gMDtcblx0fVxufVxuXG5hdmVyYWdlICgpOyAvLyDRjdGC0Lgg0YHQutC+0LHQutC4INC+0YLQstC10YfQsNGO0YIg0LfQsCDQstGL0LfQvtCyINGELdC40LggY2FsbCBmdW5jdGlvblxuLy8g0YLRg9GCIGxvY2FsINC90LUg0LLQuNC00LXQvdCwXG5jb25zb2xlLmxvZyhnbG9iYWwpO1xuY29uc29sZS5sb2coZ2xvYmFsLCBsb2NhbCk7XG5cbmNvbnNvbGUubG9nKGF2ZXJhZ2UpOyAvLyDQstGL0LLQtdC00LXRgiDRgdC+0LTQtdGA0LbQuNC80L7QtSDRhC3QuNC4XG5cblxuLypcbnZhciBudW1iZXJBID0gNDU7XG4vLyBsZXQgbnVtYmVyQSA9IDQ1O1xubGV0IG51bWJlckIgPSA2NTtcbmNvbnN0IG51bWJlckMgPSA4NTtcblxubnVtYmVyQSA9IDM1O1xuY29uc29sZS5sb2cobnVtYmVyQSk7XG5cbm51bWJlckEgPSA1NTtcbmNvbnNvbGUubG9nKG51bWJlckEpO1xuXG5udW1iZXJDID0gNzU7IC8vINGC0YPRgiDQsdGD0LTQtdGCINC+0YjQuNCx0LrQsCAtINC60L7QvdGB0YLQsNC90YMg0L3QtdC70YzQt9GPINC/0LXRgNC10L3QsNC30L3QsNGH0LDRgtGMXG4qL1xuXG5cblxuLy8g0L/QvtGB0LvQtSDQvtGI0LjQsdC60Lgg0YPQttC1INC90LjRh9C10LPQviDQvdC1INCy0YvQstC+0LTQuNGC0YzRgdGPXG5jb25zb2xlLmxvZygnZmluaXNoJyk7XG5cbi8vIGMg0Y3RgtC+0Lkg0YjRgtGD0LrQvtC5INC00LXQsdCw0LPQtdGAINC90LUg0L7RgdGC0LDQvdC+0LLQuNGC0YzRgdGPIEY1XG4vLyDQvNC+0LbQtdC8INCx0LXRgdC60L7QvdC10YfQvdC+INC/0YDQvtCx0L7Qu9C20LDRgtGMINGB0LXRgdGB0LjRjiDQtNC10LHQsNCz0LjQvdCz0LBcbnNldEludGVydmFsKGZ1bmN0aW9uICgpIHt9LCAxMCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==