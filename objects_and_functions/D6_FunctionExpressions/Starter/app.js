/* 
  Function Statements and Function Expression
*/

function greet(name) {
  console.log("Hello " + name);
} //* It's functional statements | She is have hoisting property

const secondGreet = function (name) { //Анонимная функция (функция у которой нет имени)
  console.log("Hello " + name);
} //* It's functional expression | She is doesn't have hoisting property