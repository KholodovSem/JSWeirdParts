// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) { }
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');

/* 
    Asynchronous - означает более одного за раз.
    В контексте JS - выполнее более одной задачи за раз.

    Как и упоминалось ранее, JS - синхронный.
    Но он не работает в изоляции, в браузере помимо движка JS ещё есть, Rendering engine, HTTP Request.
    И вот они уже между собой работают асинхронно.
    Так вот, когда мы например делаем запросы, мы взаимодействуем с API браузера.
    Что и даёт нам асинхронность.
*/

/* 
    Event Queue - очередь событий.
    Туда помещаются промисы, сет-таймауты/сет-интервалы.
    И когда им есть что вернуть, они следят за стеком вызовов, когда он будет пуст,
    они вернут нам ответ.
*/