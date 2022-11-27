/* 
  typeof operator - показывает какого-типа переменная или свойство
  instanceof operator - показывает эклемпляром какого класса является этот объект

*/

const str = "string";
const number = 5;
const boolean = true;

console.log(typeof str, typeof number, typeof boolean); // string, number, boolean

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const sem = new Person("Sem", 22);
console.log(sem instanceof Person); //true

