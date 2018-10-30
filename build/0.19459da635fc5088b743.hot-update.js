exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, exports) {


console.log('start'); // ReferenceError: global is not defined

// NAN  он не равен ничему, даже самому себе
console.log(1 * 'fffff');

let humen = {
	name: 'Shawn'

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
};console.log('finish');

// c этой штукой дебагер не остановиться F5
// можем бесконечно проболжать сессию дебагинга
setInterval(function () {}, 10);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L1dPUksvU2lnbWEvUHJvamVjdHNfU2lnbWEvZnJvbnRlbmQtanMtZnVuY3Rpb25zL3NyY1xcaW5kZXguanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImh1bWVuIiwibmFtZSIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0FBLFFBQVFDLEdBQVIsQ0FBWSxPQUFaLEUsQ0FBc0I7O0FBRXRCO0FBQ0FELFFBQVFDLEdBQVIsQ0FBWSxJQUFJLE9BQWhCOztBQUdBLElBQUlDLFFBQVE7QUFDWEMsT0FBTTs7QUFNUDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBcEdZLENBQVosQ0FxR0FILFFBQVFDLEdBQVIsQ0FBWSxRQUFaOztBQUVBO0FBQ0E7QUFDQUcsWUFBWSxZQUFZLENBQUUsQ0FBMUIsRUFBNEIsRUFBNUIsRSIsImZpbGUiOiIwLjE5NDU5ZGE2MzVmYzUwODhiNzQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnNvbGUubG9nKCdzdGFydCcpOyAvLyBSZWZlcmVuY2VFcnJvcjogZ2xvYmFsIGlzIG5vdCBkZWZpbmVkXG5cbi8vIE5BTiAg0L7QvSDQvdC1INGA0LDQstC10L0g0L3QuNGH0LXQvNGDLCDQtNCw0LbQtSDRgdCw0LzQvtC80YMg0YHQtdCx0LVcbmNvbnNvbGUubG9nKDEgKiAnZmZmZmYnKTsgXG5cblxubGV0IGh1bWVuID0ge1xuXHRuYW1lOiAnU2hhd24nXG59XG5cblxuXG5cbi8qXG5cbidzZGYgc2RmYSBhZiAgZGZhc2RmIHNkZidcblxuIC8vINC90YPQttC90L4g0Y3QutGA0LDQvdC40YDQvtCy0LDRgtGMKNGB0YLQsNC90LXRgiDRgdC/0LXRhi7RgdC40LzQstC+0LvQvtC8KSBcbi8vINC40LvQuCDQsNC/0L7RgdGC0YDQvtCyINC40LvQuCDQuNGB0L8uINCx0Y3QutGC0LjQutC4LCBcbi8vINC40LvQuCDQtNCy0L7QudC90YvQtSDQutCw0LLRi9GH0LrQuFxuLy8gJ2Rvbid0JzsgXG5cImRvbid0XCI7XG5gZG9uJ3RgO1xuXG4vLyBcXHIgLSDQv9C10YDQtdCy0L7QtCDQutCw0YDQtdGC0LrQuCwg0L/QtdGA0LXQstC+0LTQuNGCINC60YPRgNGB0L7RgCDQvdCw0LfQsNC0XG4vLyBcXG4gLSDQv9C10YDQtdC90L7RgSDQvdCwINC90L7QstGD0Y4g0YHRgtGA0L7QutGDXG5jb25zb2xlLmxvZygnZG9uXFwndCBERmEgQVMgIERGQVNGQVMgIEhnaGZneWhmZ3kgXFxyXFxuIGRmZCAnKTtcblxuY29uc29sZS5sb2coYGRvblxcJ3QgREZhIEFTICBERkFTRkFTICBIZ2hmZ3loZmd5ICBkZmQgYCk7XG4qL1xuXG5cbi8qXG5mdW5jdGlvbiBhZGQobnVtYmVyQSwgbnVtYmVyQikge1xuXHRyZXR1cm4gbnVtYmVyQSArIG51bWJlckI7XG59XG5cbmNvbnNvbGUubG9nKGFkZCgyNTUsMzAwKSk7XG5cbmxldCByZXN1bHQgPSBhZGQoNDUzLDM0NTMpO1xuY29uc29sZS5sb2cocmVzdWx0KTtcblxubGV0IHJlc3VsdCA9IGFkZCg1NDMyMjQsNTYpO1xuY29uc29sZS5sb2cocmVzdWx0KTtcblxubGV0IHJlc3VsdDIgPSBhZGQoNTUsNzcpO1xuY29uc29sZS5sb2cocmVzdWx0KTtcbiovXG5cblxuLypcbnZhciBnbG9iYWw7XG5jb25zb2xlLmxvZyhnbG9iYWwpO1xudmFyIGdsb2JhbCA9IDE7XG4qL1xuLypcbmNvbnNvbGUubG9nKGF2ZXJhZ2UpO1xuXG4vLyDQv9C40YHQsNGC0Ywg0LzQvtC20L3QviDQuCDQutC40YDQuNC70LvQuNGG0LXQuSwg0YLQtdGF0L3QuNGH0LXRgdC60Lgg0YDQsNCx0L7RgtCw0LVcbi8vINC90L4g0LXRgdC70LjQvdGC0LUg0L3QsNGB0YLRgNC+0LXQvdC+ICDRh9GC0L7QsSDQstGL0LTQsNCy0LDQu9C+INC+0YjQuNCx0LrQuFxubGV0INCy0LDQv9GL0LDQsiA9IDQzNDM7XG5cbmZ1bmN0aW9uIGF2ZXJhZ2UgKCkge1xufVxuKi9cblxuXG5cbi8qXG4vLyDQt9Cw0LTQtdC60LvQsNGA0LjRgNC+0LLQsNC70Lgg0YQt0LjRjlxuZnVuY3Rpb24gYXZlcmFnZSAoKSB7IC8vINGB0YDQtdC00L3QtdC1XG5cdGxldCBsb2NhbCA9IDI7XG5cdGdsb2JhbCA9IDEwOyAvLyDQv9C10YDQtdC90LDQt9C90LDRh9C40LwgINGN0YLRgyDQv9C10YDQtdC80LXQvdC90YPRjlxuXHRjb25zb2xlLmxvZyhnbG9iYWwsIGxvY2FsKTtcblxuXHRmdW5jdGlvbiBzdW0gKCkge1xuXHRcdGxldCByZXN1bHQgPSAwO1xuXHR9XG59XG5hdmVyYWdlICgpOyAvLyDRjdGC0Lgg0YHQutC+0LHQutC4INC+0YLQstC10YfQsNGO0YIg0LfQsCDQstGL0LfQvtCyINGELdC40LggY2FsbCBmdW5jdGlvblxuLy8g0YLRg9GCIGxvY2FsINC90LUg0LLQuNC00LXQvdCwXG5jb25zb2xlLmxvZyhnbG9iYWwpO1xuY29uc29sZS5sb2coZ2xvYmFsLCBsb2NhbCk7XG5cbmNvbnNvbGUubG9nKGF2ZXJhZ2UpOyAvLyDQstGL0LLQtdC00LXRgiDRgdC+0LTQtdGA0LbQuNC80L7QtSDRhC3QuNC4XG4qL1xuXG5cblxuLypcbnZhciBudW1iZXJBID0gNDU7XG4vLyBsZXQgbnVtYmVyQSA9IDQ1O1xubGV0IG51bWJlckIgPSA2NTtcbmNvbnN0IG51bWJlckMgPSA4NTtcblxubnVtYmVyQSA9IDM1O1xuY29uc29sZS5sb2cobnVtYmVyQSk7XG5cbm51bWJlckEgPSA1NTtcbmNvbnNvbGUubG9nKG51bWJlckEpO1xuXG5udW1iZXJDID0gNzU7IC8vINGC0YPRgiDQsdGD0LTQtdGCINC+0YjQuNCx0LrQsCAtINC60L7QvdGB0YLQsNC90YMg0L3QtdC70YzQt9GPINC/0LXRgNC10L3QsNC30L3QsNGH0LDRgtGMXG4qL1xuXG5cblxuLy8g0L/QvtGB0LvQtSDQvtGI0LjQsdC60Lgg0YPQttC1INC90LjRh9C10LPQviDQvdC1INCy0YvQstC+0LTQuNGC0YzRgdGPXG5jb25zb2xlLmxvZygnZmluaXNoJyk7XG5cbi8vIGMg0Y3RgtC+0Lkg0YjRgtGD0LrQvtC5INC00LXQsdCw0LPQtdGAINC90LUg0L7RgdGC0LDQvdC+0LLQuNGC0YzRgdGPIEY1XG4vLyDQvNC+0LbQtdC8INCx0LXRgdC60L7QvdC10YfQvdC+INC/0YDQvtCx0L7Qu9C20LDRgtGMINGB0LXRgdGB0LjRjiDQtNC10LHQsNCz0LjQvdCz0LBcbnNldEludGVydmFsKGZ1bmN0aW9uICgpIHt9LCAxMCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==