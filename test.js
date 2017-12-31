function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

var peter = new Person('peter');
delete peter.sayName;
peter.sayName();

function Musician(name) {
    Person.call(this, name);
}

Musician.prototype = Object.create(Person.prototype);
Musician.prototype.constructor = Musician;

var david = new Musician('david');
david.sayName();