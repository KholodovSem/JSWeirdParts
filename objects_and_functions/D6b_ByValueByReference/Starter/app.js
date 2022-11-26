/* 
  By Value vs By Reference

  Итак, данные могут храниться по значению (относится к примитивам), когда значение 
  напрямую записывается в ячейку памяти.
  И по ссылке, когда в ячейку памяти записсывается ссылка на переменную (относится к сложным типам
  данных - объектам).

  При копировании примитивных значений - создаётся новая ячейка в памяти.
  При копировании сложных типов данных - копируется ссылка на ту же ячейку памяти.
*/

const str = 'string'; // By Value
const number = 5; //By Value
const boolean = true; //By Value
const x = null; //By Value
const y = undefined; //By Value
const bigInt = BigInt(1); //By Value
// Symbol - again by value

const obj = {} //By reference
const array = []; //By reference
const fn = function () { }; //By reference

/* 
    Mutate - изменять что-то.
    Immutable
*/