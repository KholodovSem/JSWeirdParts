/* 
  Function Factories 
  Это просто функция, которая возращает другие функции
*/

function makeGreeting(language) {

  return function (firstName, lastName) {
    if (language === "en") {
      return "Hello" + " " + firstName + " " + lastName;
    }
    if (language === "es") {
      return "Hola" + " " + firstName + " " + lastName;
    }
  }

}

//Factories use

const greetingEnglish = makeGreeting('en');
const greetingSpanish = makeGreeting('es');

//Execution

console.log(greetingEnglish("Sem", "Kholodov")); // Hello Sem Kholodov
console.log(greetingSpanish("Sem", "Kholodov")); // Hola Sem Kholodov 