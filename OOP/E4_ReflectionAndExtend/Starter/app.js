/* 
    Reflection
    Это когда объект может посмотреть на себя, перечислить и изменить свои свойства и методы. 
*/

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function () {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;


for (let prop in john) {
    // console.log(prop); //It's property 
    // console.log(john[prop]); //It's key inculdes prototype methods and prop.

    if (john.hasOwnProperty(prop)) {
        console.log(john[prop]);
    }
}

