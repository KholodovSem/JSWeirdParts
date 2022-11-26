/* 
  В JavaScript нет перегрузки функций.
  Вызывать одну и туже функцию с разными аргументами.
  Мы можем лишь сымитировать это.
*/

function greet(firstname, lastname, language = 'en') {
  if (en === 'en') {
    return "Hello " + firstname + lastname
  }

  if (en === 'es') {
    return "Hola " + firstname + lastname
  }
}