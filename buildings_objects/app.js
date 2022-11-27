/* 
  Варианты создания объекта
*/

//* Use operator new or functions constructors

function Person(firstName, lastName) {

  this.firstName = firstName;
  this.lastName = lastName;

}

Person.prototype.getFullName = function () {
  console.log(this.firstName + this.lastName);
}

/* 
   Интерпритатор встречая оператор "new" создаёт новый объект.
   Тогда ключевое слово "this", которое есть в теле функции- конструктора,
   будет ссылаться на только что созданный объект, тем самым добавляя ему
   свойства "firstName", "lastName"
*/

const john = new Person();

/* 
    __proto__ - свойство объекта, указывающее на его прототип.
    prototype - свойство функций-кострукторов, указывающее на их прототим, который
    имеет общие свойства и методы.
*/

console.dir(Person);
console.dir(john);

/* 
    Object create
    Метод позволяет создать объект, первым аргументом принимает прототип будущего объекта,
    вторым его свойства
*/

const parentObject = {
  name: "Sem",
  age: 22,
  giveFullInfo: function () {
    console.log("Name: ", name, "Age: ", age);
  }
};

const childObject = Object.create(parentObject, { name: { value: "Ali" }, age: { value: 22 } });
console.log(childObject);

/* 
    Polyfil
    Code that adds a feature which the engine may lack.
*/


/* 
    Classes
    Возможность добавленная в ES6.
    Позволяет создавать однотипные объекты по шаблону.
*/

class PersonWithClass {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    console.log(this.firstName + ' ' + this.lastName);
  }
}

const sem = new PersonWithClass("Sem", "Kholodov");
console.log(sem.getFullName());

