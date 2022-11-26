/* 
  Closure 
*/

function greet(whatToSay) {

  return function (name) {
    console.log(whatToSay + " " + name);
  }

}

greet("Hi")("Sem")

//! Or

const sayHi = greet('Hi'); // (1)
sayHi("Sem"); // (2)

/* 
  Давайте шаг за шагом разберём, как это работает.

  (1) Интерпретатор доходит до строки, на которой выполняется функция "greet".
  Для неё создаётся новый Execution Context (контекст выполнения), напоминаю
  он независим от Global Execution Context.

  Внутри него отводится память для передаваемого аргумента "whatToSay" - он записывается
  в памяти (в любом случае). Если его не передали, переменная с таким именем будет создана
  но её значением будет - udefined.

  После чего она возращает новый функциональный объект (далее просто функцию)
  и снимается со стека вызовов. Но, важно то, что место в памяти, которое было отведено
  для переменной "whatToSay" никуда не исчезло.

  (2) Далее интерпритатор доходит до строки кода, на которой мы вызываем переменную "sayHi",
  а мы знаем что её значением будет ранее возращенная функция.
  И вот уже в теле этой функции мы обращаемся к переменной "whatToSay".
  Тогда просто срабатывает scope chain (цепочка областей видимости).
  Так как в теле данной функции этой переменной нет, интерпретатор подымается на уровень выше
  и находит эту переменную там.

  Весь этот процесс и называется "Closure (замыкание)".
*/

//* Part 2 "Closure"

function buildFunctions() {

  const arr = [];

  for (var i = 0; i < 3; i += 1) {
    arr.push(
      function () { //* (1)
        console.log(i);
      }
    )
  };

  return arr;
}

const fnArray = buildFunctions();
//* (2)
fnArray.forEach(el => el()); // 3, 3, 3
fnArray[0](); //3
fnArray[1](); //3
fnArray[2](); //3 

/* 
  Почему происходит именно так?
  (1) Мы не вызываем сразу же функцию в цикле, мы её просто создаём и момещаем в ранее созданный
  массив.
  (2) Когда мы вызываем функции уже из созданного массива, происходит процесс, который 
  я описал ранее. Мы по цепочке областей видимости обращаемся к переменной "i".
  Но её финальное значение, после того как отработал цикл = 3.
  Вот и всё.
*/

/* 
  Если все же перед нами будет стоять задача, отобразить "i" каждой итерации
  цикла - это можно легко сделать, заменив переменную "i", которая была объявлена
  как "var" на "let".
  У "let" область видимости блочная, что позволит фиксировать фактическое значение
  на каждой итерации.
*/