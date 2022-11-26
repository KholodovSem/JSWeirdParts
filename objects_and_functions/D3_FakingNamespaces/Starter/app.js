var greet = 'Hello!';
var greet = 'Hola!';
//! В данном случае "Hola" перезапишет "Hello"

console.log(greet);

/* 
  Namespace (Контейнер для переменных и функций)
  Обычно используется для того, чтобы разделять переменные и функции
  с одинаковыми именнами.

  В JS, напрямую такой возможности нет - тоесть нет как-такового неймспейса.
  Но мы можем сымитировать его.
  Таким контейнером может послужить - объект.
*/

const english = { greet: 'Hello' };
const spanish = { greet: 'Hola' };

console.log(english.greet);
console.log(spanish.greet);