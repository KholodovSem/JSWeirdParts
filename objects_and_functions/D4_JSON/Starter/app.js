/*
  JSON (JavaScript Object Notation).
  JSON-формат передачи данных вдохновлён и очень похож на литерал объекта,
  за исключением того, что //*Имя свойства заключается в кавычки,
  //* Функция не может быть значением свойства
*/

// {
//   "firstName": "Sem",
//   "lastName": "Kholodov"  
// } //* JSON data

/* 
  JSON Methods
  1. JSON.stringify() - преобразует объект в строку JSON
  2.JSON.parse() - преобразует строку JSON в объект
*/

console.log(JSON.stringify({ firstName: 'Sem', lastName: 'Kholodov' }));
const person = {
  greet: 'Hello',
  numbers: [1, 2, 3, 4, 5]
}
console.log(JSON.parse(JSON.stringify(person)));