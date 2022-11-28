/*
    Promises
    A standardized approach to dealing with
    asynchronous events and callbacks.

    Промисс - это объект, который предстовляет собой
    будующее значение чего-то.

    //* Имеет три состояния:

    - pending - ожидание выполнения промисса.

    - fullfiled - успешно выполненный промисс.

    - rejected - отклоненённый промисс.
*/

//Emulating promise work
const PENDING = 0;
const FULLFILED = 1;
const REJECTED = 2;

function CustomPromise(executor) {
  let state = PENDING;
  let value = null;

  const handlers = [];
  const catches = [];

  function resolve(result) {
    if (state !== PENDING) {
      return;
    }

    state = FULLFILED;
    value = result;

    handlers.forEach(h => h(value));
  }

  function reject(err) {
    if (state !== PENDING) {
      return;
    }

    state = REJECTED;
    value = err;

    catches.forEach(c => c(value));
  }

  this.then = function (callback) {
    if (state === FULLFILED) {
      callback(value);
    } else {
      handlers.push(callback);
    }
  }

  executor(resolve, reject);
}

const doWork = (res, rej) => {
  setTimeout(() => {
    res('Hello World')
  }, 1000)
}
const test = new CustomPromise(doWork);
console.log(test);
test.then(value => console.log(value));