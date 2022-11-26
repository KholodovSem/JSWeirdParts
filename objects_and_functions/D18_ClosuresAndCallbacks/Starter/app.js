/* 
  Callback
  Функции, которые вы передаёте в качестве аргументов в другие функции, называются
  "callback"
*/


function sayHiLater() {

  const greeting = "Hi";

  setTimeout(function () { //* It's callback
    console.log(greeting);
  }, 3000)
};

sayHiLater();