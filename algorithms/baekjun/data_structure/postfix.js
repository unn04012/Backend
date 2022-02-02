function solution(str) {
  let answer = "";
  const operation = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "%": 2,
    "(": 3,
    ")": 3,
  };
  const opStack = [];
  for (const c of str) {
    if (!operation[c]) {
      answer += c;
      continue;
    }
    if (c === ")") {
      while (opStack.length && opStack[opStack.length - 1] !== "(") {
        answer += opStack.pop();
      }
      opStack.pop();
      continue;
    }

    if (c !== "(" && operation[opStack[opStack.length - 1]] >= operation[c]) {
      while (
        opStack[opStack.length - 1] !== "(" &&
        operation[opStack[opStack.length - 1]] >= operation[c]
      )
        answer += opStack.pop();
    }
    opStack.push(c);
  }
  while (opStack.length) answer += opStack.pop();
  return answer;
}

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input[0]));
