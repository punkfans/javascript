function Person(name) {
    this.name = name;
}

var peter = new Person('Peter');
Person.prototype.sayName = function () {
    console.log(this.name);
};

Person.prototype.copy = function () {
    return new this.constructor(this.name);
};

peter.sayName();

function Musician(name) {
    // javascript way of inheritance, use call, pass in the 'this' and the parameter
    Person.call(this, name);
}

var alice = new Musician('Alice');
console.log(alice.name); // Alice
//alice.sayName(); // this will give an error, because the sayName function is the prototype chain, it's not available here

//So we have to add it to the prototype chain as well
Musician.prototype = Object.create(Person.prototype);
// Also, it's best practice to point the constructor back to Musician
//https://stackoverflow.com/questions/8453887/why-is-it-necessary-to-set-the-prototype-constructor
Musician.prototype.constructor = Musician;

var david = new Musician('David');
david.sayName();
console.log(david.copy() instanceof Musician); // true, if line 29 is commented out, this will be false
console.log(david.copy() instanceof Person); // true

// 2 steps to inherit
// 1. use parent constructor and use call function
// 2. take care of the prototype chain and reset the constructor