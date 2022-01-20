"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    // console.log(s.toUpperCase());
});
function printName(obj) {
    var _a;
    console.log(obj.first.toUpperCase());
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()); // 최신 Javascript code
}
/**
 * Union Type
 */
function printId(id) {
    if (typeof id === "string") {
        console.log("Your Id is : " + id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    }
    console.log("Welcome lone traveler " + x);
}
var people = ["Tom", "Brayn"];
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
function window(post) {
    console.log(post.title, post.content);
}
var post = { title: "test title", content: "test content" };
window(post);
// Error: Duplicate identifier 'Window'
// type Window2{
//   content : string
// }
/**
 * Type assertion
 * 당신이 어떤 값의 타입에 대한 정보를 더 잘 아는 경우 사용한다 as 사용법
 * <>를 이용하여 사용하는 것도 가능
 * 타입 단언은 틀렸더라도 예외가 발생하거나 null이 생성되지 않는다.
 */
//const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
//const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
/**
 * 리터럴 타입
 * 구체적인 문자열과 숫자 값을 타입 위치에서 지정할 수 있다.
 * 유니온과 함께 사용하면 특정 종류의 값들만을 인자로 받을 수 있는 함수로 정의 가능하다.
 */
var constantString = "Hello world";
function printText(s, alignment) {
    //
}
printText("hello world", "left");
//'"centers"' 형식의 인수는 '"left" | "right" | "center"' 형식의 매개 변수에 할당될 수 없습니다.
// printText("hello world", "centers");
// declare function handleRequest(url: string, method: "GET" | "POST"): void;
var req = { url: "https//example.com", method: "GET" };
// 오류 내용  : req.method는 string으로 추론되지, "GET" 으로 추론되지 않습니다.
//handleRequest(req.url, req.method);
/**
 * 해결방법1 : 둘 중에 한 가지 타입 단언을 추가하여 추론 방식을 변경할 수 있다.
 * 해결방법2 : as const를 사용하여 객체 전체를 리터럴 타입으로 변환할 수 있다.
 * as const : 해당 객체의 모든 프로퍼티에 string, number와 같은 일반적인 타입이 아닌 리터럴 타입의 값이 대입되도록 보장
 */
var req1 = { url: "https://example.com", method: "GET" };
// handleRequest(req1.url, req1.method);
/**
 * null과 undefined
 * strictNullCheck 옵션의 설정 여부에 따라 달라진다.
 */
function doSomething(x) {
    if (x === undefined) {
        // 아무것도 하지 않는다.
    }
    else {
        console.log("hello " + x.toUpperCase);
    }
}
/**
 * Null아님 단언 연산자(접미사 !)
 * 타입에서 null과 undefined를 제거할 수 있는 특별한 구문을 제공한다
 * 표현식 뒤에 !를 작성하면 해당 값이 null 또는 undefined가 아니라고 타입 단언하는 것
 */
function liveDangerously(x) {
    // !연산자는 해당 값이 null 또는 undeinfed가 아닌 경우에만 사용해야 한다
    console.log(x.toFixed);
}
var a = Boolean("hello");
var b = !!"world";
console.log(a);
console.log(b);
