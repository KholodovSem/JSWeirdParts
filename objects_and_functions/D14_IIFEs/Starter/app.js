/* 
  IIFEs (Immediately Invoked Function Expressions)
*/

/* 
  Заключая декларацию функции в скобки (это оператор),
  мы говорим syntax parser, что это теперь фунециональное выражение.
  А сразу после скобок, которыми мы обернули функцию, ставим скобки вызова, тем самым
  сразу же вызывая только что созданную функцию.
  Вот и вся магия.
*/
(function greet() {
  console.log("Hello everyone");
})() // It's immediately Invoked Function Expression

//! Or

const greetPhrase = function IIFEGreetFn() {
  return "Hello everyone"
}();