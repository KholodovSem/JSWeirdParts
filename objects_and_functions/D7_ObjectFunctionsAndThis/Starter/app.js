/* 
  Objects, functions - THIS 

  Каждый раз, когда создаётся новый контекст выполнения (Execution Context), нам становится доступна
  переменная "this", которая будет ссылаться на данный контекст.

  Вызывая ключевое слово "this" просто в контексте функции, мы всегда будем ссылаться на глобальный
  объект Window.

  Однако, если мы вызываем "this" в контексте метода объекта, оно будет ссылаться на данный
  объект.
*/

function fn() {
  console.log(this); //Window or Undefined (Strict Mode)
}

const obj = {
  firstName: "Sem",
  greet: function () {
    console.log(this); // this = obj
  }
}

fn();

obj.greet();