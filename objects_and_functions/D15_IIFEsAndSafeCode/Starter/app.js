// IIFE
var firstname = 'John';

(function (name) {

    var greeting = 'Hello';
    console.log(greeting + ' ' + name);

}(firstname)); // IIFE

/* 
    Множество библиотек или фреймфорков, можем использовать IIFE
    для того чтобы обернуть свой код в безопасную среду, и ограничить
    его воздейсвие на глобальный объект.
*/






















