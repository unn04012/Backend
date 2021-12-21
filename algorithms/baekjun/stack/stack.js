let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

var a = parseInt(input[0]);

// class Stack {
//   constructor() {
//     this.stack = [];
//   }
//   push(value) {
//     this.stack.push(value);
//   }
//   pop() {
//     return this.stack.length === 0 ? -1 : this.stack.pop();
//   }
//   size() {
//     return this.stack.length;
//   }
//   empty() {
//     return this.stack.length === 0 ? 1 : 0;
//   }
//   top() {
//     return this.stack.length === 0 ? -1 : this.stack[this.stack.length - 1];
//   }
// }

console.log(solution(a, input.slice(1, input.length)));

function solution(n, commands) {
  let answer = "";
  let stack = [];
  const Stack = {
    push: (value) => {
      stack.push(value);
    },
    pop: () => {
      return stack.length === 0 ? -1 : stack.pop();
    },
    size: () => {
      return stack.length;
    },
    empty: () => {
      return stack.length === 0 ? 1 : 0;
    },
    top: () => {
      return stack.length === 0 ? -1 : stack[stack.length - 1];
    },
  };
  commands.forEach((command) => {
    let [cmd, val] = command.split(" ");
    if (val) Stack[cmd](val);
    else answer += Stack[cmd]() + "\n";
  });

  return answer.slice(0, answer.length - 1);
}
// let stack = [];
// const Stack = {
//   push: (value) => {
//     stack.push(value);
//   },
//   pop: () => {
//     return stack.length === 0 ? -1 : stack.pop();
//   },
//   size: () => {
//     return stack.length;
//   },
//   empty: () => {
//     return stack.length === 0 ? 1 : 0;
//   },
//   top: () => {
//     return stack.length === 0 ? -1 : stack[stack.length - 1];
//   },
// };
// Stack.push(1);

// console.log(stack);
// console.log(Stack["pop"]());
