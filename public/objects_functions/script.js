
// Objects and functions

// var john = {
//     'name' : 'John',
//     'birth' : 1990
// }


// var Person = function(name, birth, job){
//     this.name = name,
//     this.birth = birth,
//     this.job = job
// }

// Person.prototype.calcAge = function(){
//     console.log(2019 - this.birth);
// }

// Person.prototype.lastName = 'Parreira';

// var john = new Person('fernando', 1977, 'ti');

// john.calcAge();

// console.log(john.lastName);

// //prototype chains - inheritance
// console.log(john);


// // Objects.create
// var personProto = {
//     calcAge: function(){
//         console.log(2016-birth);        
//     }
// }

// var john = Object.create(personProto)
// john.name = 'Joao';
// john.birth = 2015;
// john.job = 'estudent';

// var luke = Object.create(Object.prototype)


// Primitive vs Objects
// primitives
var a = 23;
var b = a;

a = 42;
console.log(a);
console.log(b);

// objects
var obj1 = {
    name: 'John',
    age: 10
}

var obj2 = obj1;

obj1.age = 11;

console.log(obj1.age);
console.log(obj2.age);

// functions
var age = 10;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(x, y){
    x = 30;
    y.city = 'San Francisco'
}

change(age, obj);

console.log(age, obj.city);



