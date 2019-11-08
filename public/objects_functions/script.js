
// var john = {
//     'name' : 'John',
//     'birth' : 1990
// }

var Person = function(name, birth, job){
    this.name = name,
    this.birth = birth,
    this.job = job
}

Person.prototype.calcAge = function(){
    console.log(2019 - this.birth);
}

Person.prototype.lastName = 'Parreira';

var john = new Person('fernando', 1977, 'ti');

john.calcAge();

console.log(john.lastName);

//prototype chains - inheritance
console.log(john);
