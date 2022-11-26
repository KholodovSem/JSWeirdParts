/* 
  "Arguments" in functions (not arrow functions)
  Псевдо-массив, который агрегирует в себе все аргументы функции.
  Есть только у классических функций.

  Spread operator (...)
  Оператор расспыления, может расспылить массив или объект.

  Rest operator (...)
  Противоположный оператор - сбора, агрегирует элементы в массив.
*/

//! Arguments
function combineArguments() {
  const copyOfArguments = [...arguments]; //Псевдо-массив "arguments"
  return copyOfArguments.reduce((prevEl, currentEl) => {
    return prevEl + currentEl;
  }, 0)
}

console.log(combineArguments(1, 2, 3, 4, 5));

//! Spread operator
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1];
//Теперь у нас есть точная копия 'arr1' не связанная с ним ссылкой.

//! Rest operator
const arrowFn = (...arg) => {
  console.log(arg);
}

arrowFn(1, 2, 3, 4, 5);