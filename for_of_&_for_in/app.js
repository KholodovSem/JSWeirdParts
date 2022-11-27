/* 
    for in 
    Возвращает список ключей итерируемого объекта, чаще всего используется
    для перебора свойств объекта или проверки их на собственность.
*/

const obj = {
  name: "Sem",
  age: 22,
  profession: "JavaScript developer"
}

for (let key of obj) {
  console.log(key); //Object key
  console.log(obj[key]); //Object value
}

/* 
    for of
    Возращает список значений интерируемого объекта.
*/

const names = ["Sem", "June", "Bob"];

for (let value of names) {
  console.log(value); //Sem, June, Bob | Array values
}