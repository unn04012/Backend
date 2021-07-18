class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

// let user = new Student("Jane", "M.", "User");

// document.body.textContent = greeter(user)

function user(name : string = "mun", age : number = 25) : string{
    let str = `name is ${name} and age is ${age}`;

    return str;
}

// console.log(user());
// console.log(user('Seol', 31));

/**
 * 클래스
 */

class Gretter {
    greeting : string;
    constructor(message : string){
        this.greeting = message;
    }

    greet(){
        return "Hello," + this.greeting;
    }
}

// let gretter = new Gretter("world");
// console.log(gretter.greet());

// 상속
class Animal{
    move(distanceInMeters : number = 0){
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal{
    bark(){
        console.log('Woof! Woof!')
    }
}

// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();

/**
 * 생성자 내에서 this에 있는 프로퍼티에 접근하기 전에 super()를 먼저 호출해야 한다
 */
class Animals{
    name : string;
    constructor(theName : string){this.name = theName};

    move(distanceInMeters : number = 0){
        console.log(`${this.name} moved ${distanceInMeters}`);
    }

}

class Snake extends Animals {
    constructor(name : string) {super(name);}

    move(distanceInMeters = 5){ // 오버라이딩
        console.log("Silthering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animals {
    constructor(name: string){super(name);}

    move(distanceInMeters = 45){
        console.log("Galloping...");
         super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom : Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);



