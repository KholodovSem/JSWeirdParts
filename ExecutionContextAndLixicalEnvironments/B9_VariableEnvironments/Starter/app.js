/* 
  Variables environment (окружение переменных)
*/

function b() {
  var myVar;
  console.log(myVar); //undefined
}

function a() {
  var myVar = 2;
  console.log(myVar); //2
}

var myVar = 1;
console.log(myVar); //1
a();

/* 
  Не смотря на то что переменные имеют одно и тоже имя, они вызываются в разном лексическом окружении 
  и будут исполняться в своём контексте исполнения.
*/