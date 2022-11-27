/* 
  Understanding Prototype

  All objects, includes functions have a prototype property.
  It's just a reference to another object.

  Всё очень просто, мы можем обратиться к какому-то свойству или методу объекта,
  и если у него оно будет отсутсвовать, интерпретатор пойдет его искать 
  у прототипа этого объекта, если и у него будет остутсвовать этот метод или
  свойство он пойдет уже к его прототипу, и так до тех пор, пока прототипы не закончатся.
*/

/* 
  __proto__ - есть у любых объектов, ссылается на прототип конструктора.
  prototype - есть у Object, Fn, Class
*/

var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function () {
    return this.firstname + ' ' + this.lastname;
  }
}

var john = {
  firstname: 'John',
  lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;
