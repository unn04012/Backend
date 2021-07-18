"use strict";
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// let user = new Student("Jane", "M.", "User");
// document.body.textContent = greeter(user)
function user(name = "mun", age = 25) {
    let str = `name is ${name} and age is ${age}`;
    return str;
}
// console.log(user());
// console.log(user('Seol', 31));
/**
 * 클래스
 */
class Gretter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello," + this.greeting;
    }
}
// let gretter = new Gretter("world");
// console.log(gretter.greet());
// 상속
class Animal {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}
// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();
/**
 * 생성자 내에서 this에 있는 프로퍼티에 접근하기 전에 super()를 먼저 호출해야 한다
 */
class Animals {
    constructor(theName) { this.name = theName; }
    ;
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}
class Snake extends Animals {
    constructor(name) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Silthering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animals {
    constructor(name) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
