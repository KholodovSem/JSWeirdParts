/* 
  call(), apply(), bind() 
  Это всё встроенные методы функции, которые позволяют изменить контекст (this).
*/

const person = {
  firstName: "Sem",
  lastName: "Kholodov",
  getFullName: function () {
    return console.log(this.firstName + ' ' + this.lastName);
  }
}

function greet() {
  console.log(this.firstName);
  console.log(this.lastName);
}

/* 
  Bind()
  Навсегда переопределяет контектс функции, к которой применяется.
  В дальнейшем его изменить нельзя.
  Возвращает новую функцию с новым контекстом.

  Принимает первым аргументом - контекст, вторым - доп. аргументы (вкл. массив параметров). Опционален.
*/
const bindedFn = greet.bind(person);
bindedFn();

/* 
  Call() 
  Сразу же вызывает функцию с новым контексом.

  Принимает первым аргументом - контекст, вторым - доп. аргументы (вкл. массив параметров). Опционален.
*/
greet.call(person)

/* 
  Apply()
  Сразу же вызывает функцию с новым контексом.

  Принимает первым аргументом - контекст, вторым - доп. аргументы. Опционален.
*/
greet.apply(person)

/* 
  //* Carrying
  
  It's creating a copy of a function but with some preset parameters
*/