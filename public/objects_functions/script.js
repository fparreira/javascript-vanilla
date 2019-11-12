
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


//////////////////////////////////////////////
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


//////////////////////////////////////////////
// Primitive vs Objects
// primitives
// var a = 23;
// var b = a;

// a = 42;
// console.log(a);
// console.log(b);

// // objects
// var obj1 = {
//     name: 'John',
//     age: 10
// }

// var obj2 = obj1;

// obj1.age = 11;

// console.log(obj1.age);
// console.log(obj2.age);

// // functions
// var age = 10;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// }

// function change(x, y){
//     x = 30;
//     y.city = 'San Francisco'
// }

// change(age, obj);

// console.log(age, obj.city);


//////////////////////////
// IIFE

// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function(){
//     var name = 'John';
//     console.log(name);
// })();

// passing arguments
// (function(val1, val2){
//     console.log(val1+val2);
// })(480,32);


///////////////////////////////
// Closures

// function retirement(retirementAge){
//     var a = " years left until retirement.";
//     return function(yearOfBirth){
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge-age) + a);
//     }
// }

// var retirementUs = retirement(66);
// retirementUs(1977);

// retirement(66)(1977);

///////////////////////////////////
// Bind, Call and Apply

// Call
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + '. I\'m ' + this.job + '.' );            
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up, I\'m ' + this.name + '. I\'m ' + this.job + '.' );            
        }
    }
}

var emily = {
    name: 'Emily',
    age: '33',
    job: 'designer'
}

john.presentation('formal', 'morning');

// console.log(john);

john.presentation.call(emily, 'friendly', 'afternoon')
