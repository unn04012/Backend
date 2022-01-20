import { Console } from "console";

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
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

function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

const names = ["Alice", "Bob", "Eve"];

names.forEach((s) => {
  // console.log(s.toUpperCase());
});

function printName(obj: { first: string; last?: string }) {
  console.log(obj.first.toUpperCase());
  console.log(obj.last?.toUpperCase()); // 최신 Javascript code
}

/**
 * Union Type
 */
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log("Your Id is : " + id.toUpperCase());
  } else {
    console.log(id);
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));
  }
  console.log("Welcome lone traveler " + x);
}
const people = ["Tom", "Brayn"];
// welcomePeople(people);
// welcomePeople("Mun");

/**
 * Type Aliases
 * 똑같은 타입을 한 번 이상 재사용하거나 또 다른 이름으로 부르고 싶을 때 사용
 * Union type에 대하여 타입 별칭 부여 가능
 */
type Point = {
  x: number;
  y: number;
};
type ID = number | string;
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
// printCoord({ x: 100, y: 100 });

/**
 * Interface
 * 객체 타입을 만드는 또 다른 방법
 */
/**
 * 타입 별칭과 인터페이스의 핵심적인 차이
 * 타입은 새 프로퍼티를 추가할 수 있도록 개발될 수 없는 반면, 인터페이스의 경우 항상 확장될 수 있다
 */
interface Window {
  title: string;
}
interface Window {
  content: string;
}
function window(post: Window) {
  console.log(post.title, post.content);
}
let post = { title: "test title", content: "test content" };
window(post);

type Window2 = {
  title: string;
};
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
const constantString = "Hello world";
function printText(s: string, alignment: "left" | "right" | "center") {
  //
}
printText("hello world", "left");
//'"centers"' 형식의 인수는 '"left" | "right" | "center"' 형식의 매개 변수에 할당될 수 없습니다.
// printText("hello world", "centers");

// declare function handleRequest(url: string, method: "GET" | "POST"): void;
const req = { url: "https//example.com", method: "GET" };
// 오류 내용  : req.method는 string으로 추론되지, "GET" 으로 추론되지 않습니다.
//handleRequest(req.url, req.method);
/**
 * 해결방법1 : 둘 중에 한 가지 타입 단언을 추가하여 추론 방식을 변경할 수 있다.
 * 해결방법2 : as const를 사용하여 객체 전체를 리터럴 타입으로 변환할 수 있다.
 * as const : 해당 객체의 모든 프로퍼티에 string, number와 같은 일반적인 타입이 아닌 리터럴 타입의 값이 대입되도록 보장
 */
const req1 = { url: "https://example.com", method: "GET" as "GET" };
// handleRequest(req1.url, req1.method);

/**
 * null과 undefined
 * strictNullCheck 옵션의 설정 여부에 따라 달라진다.
 */
function doSomething(x: string | undefined) {
  if (x === undefined) {
    // 아무것도 하지 않는다.
  } else {
    console.log("hello " + x.toUpperCase);
  }
}

/**
 * Null아님 단언 연산자(접미사 !)
 * 타입에서 null과 undefined를 제거할 수 있는 특별한 구문을 제공한다
 * 표현식 뒤에 !를 작성하면 해당 값이 null 또는 undefined가 아니라고 타입 단언하는 것
 */

function liveDangerously(x?: number | undefined) {
  // !연산자는 해당 값이 null 또는 undeinfed가 아닌 경우에만 사용해야 한다
  console.log(x!.toFixed);
}

let a = Boolean("hello"); // boolean type
let b = !!"world"; // literal type
console.log(a);
console.log(b);
