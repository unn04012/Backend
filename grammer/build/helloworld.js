var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// let user = new Student("Jane", "M.", "User");
// document.body.textContent = greeter(user)
function user(name, age) {
    if (name === void 0) { name = "mun"; }
    if (age === void 0) { age = 25; }
    var str = "name is " + name + " and age is " + age;
    return str;
}
// console.log(user());
// console.log(user('Seol', 31));
/**
 * 클래스
 */
var Gretter = /** @class */ (function () {
    function Gretter(message) {
        this.greeting = message;
    }
    Gretter.prototype.greet = function () {
        return "Hello," + this.greeting;
    };
    return Gretter;
}());
var gretter = new Gretter("world");
console.log(gretter.greet());
