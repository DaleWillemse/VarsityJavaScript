function Person(name) {
    this.name = name;
    this.introduce = function () {
        return `Hi, I'm ${this.name}`
    }
}

let john = new Person("John")
let jack = new Person("Jack")

console.log(jack.introduce());
console.log(john.introduce());


class User { // Syntactical sugar

    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`Hi, I'm ${this.name} - class`);
    }
}

let user = new User("John");
user.sayHi();