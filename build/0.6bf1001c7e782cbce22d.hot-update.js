exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, exports) {


console.log('start'); // ReferenceError: global is not defined

// NAN  он не равен ничему, даже самому себе
console.log(1 * 'fffff');

let humen = {
	name

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L1dPUksvU2lnbWEvUHJvamVjdHNfU2lnbWEvZnJvbnRlbmQtanMtZnVuY3Rpb25zL3NyY1xcaW5kZXguanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImh1bWVuIiwibmFtZSIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0FBLFFBQVFDLEdBQVIsQ0FBWSxPQUFaLEUsQ0FBc0I7O0FBRXRCO0FBQ0FELFFBQVFDLEdBQVIsQ0FBWSxJQUFJLE9BQWhCOztBQUdBLElBQUlDLFFBQVE7QUFDWEM7O0FBTUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7Ozs7O0FBS0E7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQXBHWSxDQUFaLENBcUdBSCxRQUFRQyxHQUFSLENBQVksUUFBWjs7QUFFQTtBQUNBO0FBQ0FHLFlBQVksWUFBWSxDQUFFLENBQTFCLEVBQTRCLEVBQTVCLEUiLCJmaWxlIjoiMC42YmYxMDAxYzdlNzgyY2JjZTIyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zb2xlLmxvZygnc3RhcnQnKTsgLy8gUmVmZXJlbmNlRXJyb3I6IGdsb2JhbCBpcyBub3QgZGVmaW5lZFxuXG4vLyBOQU4gINC+0L0g0L3QtSDRgNCw0LLQtdC9INC90LjRh9C10LzRgywg0LTQsNC20LUg0YHQsNC80L7QvNGDINGB0LXQsdC1XG5jb25zb2xlLmxvZygxICogJ2ZmZmZmJyk7IFxuXG5cbmxldCBodW1lbiA9IHtcblx0bmFtZVxufVxuXG5cblxuXG4vKlxuXG4nc2RmIHNkZmEgYWYgIGRmYXNkZiBzZGYnXG5cbiAvLyDQvdGD0LbQvdC+INGN0LrRgNCw0L3QuNGA0L7QstCw0YLRjCjRgdGC0LDQvdC10YIg0YHQv9C10YYu0YHQuNC80LLQvtC70L7QvCkgXG4vLyDQuNC70Lgg0LDQv9C+0YHRgtGA0L7QsiDQuNC70Lgg0LjRgdC/LiDQsdGN0LrRgtC40LrQuCwgXG4vLyDQuNC70Lgg0LTQstC+0LnQvdGL0LUg0LrQsNCy0YvRh9C60Lhcbi8vICdkb24ndCc7IFxuXCJkb24ndFwiO1xuYGRvbid0YDtcblxuLy8gXFxyIC0g0L/QtdGA0LXQstC+0LQg0LrQsNGA0LXRgtC60LgsINC/0LXRgNC10LLQvtC00LjRgiDQutGD0YDRgdC+0YAg0L3QsNC30LDQtFxuLy8gXFxuIC0g0L/QtdGA0LXQvdC+0YEg0L3QsCDQvdC+0LLRg9GOINGB0YLRgNC+0LrRg1xuY29uc29sZS5sb2coJ2RvblxcJ3QgREZhIEFTICBERkFTRkFTICBIZ2hmZ3loZmd5IFxcclxcbiBkZmQgJyk7XG5cbmNvbnNvbGUubG9nKGBkb25cXCd0IERGYSBBUyAgREZBU0ZBUyAgSGdoZmd5aGZneSAgZGZkIGApO1xuKi9cblxuXG4vKlxuZnVuY3Rpb24gYWRkKG51bWJlckEsIG51bWJlckIpIHtcblx0cmV0dXJuIG51bWJlckEgKyBudW1iZXJCO1xufVxuXG5jb25zb2xlLmxvZyhhZGQoMjU1LDMwMCkpO1xuXG5sZXQgcmVzdWx0ID0gYWRkKDQ1MywzNDUzKTtcbmNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbmxldCByZXN1bHQgPSBhZGQoNTQzMjI0LDU2KTtcbmNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbmxldCByZXN1bHQyID0gYWRkKDU1LDc3KTtcbmNvbnNvbGUubG9nKHJlc3VsdCk7XG4qL1xuXG5cbi8qXG52YXIgZ2xvYmFsO1xuY29uc29sZS5sb2coZ2xvYmFsKTtcbnZhciBnbG9iYWwgPSAxO1xuKi9cbi8qXG5jb25zb2xlLmxvZyhhdmVyYWdlKTtcblxuLy8g0L/QuNGB0LDRgtGMINC80L7QttC90L4g0Lgg0LrQuNGA0LjQu9C70LjRhtC10LksINGC0LXRhdC90LjRh9C10YHQutC4INGA0LDQsdC+0YLQsNC1XG4vLyDQvdC+INC10YHQu9C40L3RgtC1INC90LDRgdGC0YDQvtC10L3QviAg0YfRgtC+0LEg0LLRi9C00LDQstCw0LvQviDQvtGI0LjQsdC60LhcbmxldCDQstCw0L/Ri9Cw0LIgPSA0MzQzO1xuXG5mdW5jdGlvbiBhdmVyYWdlICgpIHtcbn1cbiovXG5cblxuXG4vKlxuLy8g0LfQsNC00LXQutC70LDRgNC40YDQvtCy0LDQu9C4INGELdC40Y5cbmZ1bmN0aW9uIGF2ZXJhZ2UgKCkgeyAvLyDRgdGA0LXQtNC90LXQtVxuXHRsZXQgbG9jYWwgPSAyO1xuXHRnbG9iYWwgPSAxMDsgLy8g0L/QtdGA0LXQvdCw0LfQvdCw0YfQuNC8ICDRjdGC0YMg0L/QtdGA0LXQvNC10L3QvdGD0Y5cblx0Y29uc29sZS5sb2coZ2xvYmFsLCBsb2NhbCk7XG5cblx0ZnVuY3Rpb24gc3VtICgpIHtcblx0XHRsZXQgcmVzdWx0ID0gMDtcblx0fVxufVxuYXZlcmFnZSAoKTsgLy8g0Y3RgtC4INGB0LrQvtCx0LrQuCDQvtGC0LLQtdGH0LDRjtGCINC30LAg0LLRi9C30L7QsiDRhC3QuNC4IGNhbGwgZnVuY3Rpb25cbi8vINGC0YPRgiBsb2NhbCDQvdC1INCy0LjQtNC10L3QsFxuY29uc29sZS5sb2coZ2xvYmFsKTtcbmNvbnNvbGUubG9nKGdsb2JhbCwgbG9jYWwpO1xuXG5jb25zb2xlLmxvZyhhdmVyYWdlKTsgLy8g0LLRi9Cy0LXQtNC10YIg0YHQvtC00LXRgNC20LjQvNC+0LUg0YQt0LjQuFxuKi9cblxuXG5cbi8qXG52YXIgbnVtYmVyQSA9IDQ1O1xuLy8gbGV0IG51bWJlckEgPSA0NTtcbmxldCBudW1iZXJCID0gNjU7XG5jb25zdCBudW1iZXJDID0gODU7XG5cbm51bWJlckEgPSAzNTtcbmNvbnNvbGUubG9nKG51bWJlckEpO1xuXG5udW1iZXJBID0gNTU7XG5jb25zb2xlLmxvZyhudW1iZXJBKTtcblxubnVtYmVyQyA9IDc1OyAvLyDRgtGD0YIg0LHRg9C00LXRgiDQvtGI0LjQsdC60LAgLSDQutC+0L3RgdGC0LDQvdGDINC90LXQu9GM0LfRjyDQv9C10YDQtdC90LDQt9C90LDRh9Cw0YLRjFxuKi9cblxuXG5cbi8vINC/0L7RgdC70LUg0L7RiNC40LHQutC4INGD0LbQtSDQvdC40YfQtdCz0L4g0L3QtSDQstGL0LLQvtC00LjRgtGM0YHRj1xuY29uc29sZS5sb2coJ2ZpbmlzaCcpO1xuXG4vLyBjINGN0YLQvtC5INGI0YLRg9C60L7QuSDQtNC10LHQsNCz0LXRgCDQvdC1INC+0YHRgtCw0L3QvtCy0LjRgtGM0YHRjyBGNVxuLy8g0LzQvtC20LXQvCDQsdC10YHQutC+0L3QtdGH0L3QviDQv9GA0L7QsdC+0LvQttCw0YLRjCDRgdC10YHRgdC40Y4g0LTQtdCx0LDQs9C40L3Qs9CwXG5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7fSwgMTApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=