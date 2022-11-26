/* 
  First class function - it's object

  В JS функции - это специальный тип объекта.

  Так как это "объект", мы можем прекрепить к функции примитив, другой объект, другую функцию.
  А также есть два специальных свойства:
  //*1. [name] - опцианальное свойство
  //*2. [code] - тело самой функции, которое можно вызывать
*/

function greet() {
  console.log("Hi");
}

greet.language = 'english';
console.log(greet.language); //"english"
console.dir(greet); //Все свойства объекта