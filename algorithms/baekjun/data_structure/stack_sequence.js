function solution(n, numbers) {
  let answer = [];
  let stack = [];
  let value = 1;
  for (const num of numbers) {
    if (num >= value || num >= stack[stack.length - 1]) {
      for (let i = value; i <= num; i++) {
        answer.push("+");
        stack.push(i);
        value += 1;
      }
    } else {
      return "NO";
    }
    while (stack.length && stack[stack.length - 1] === num) {
      answer.push("-");
      stack.pop();
    }
  }
  return answer.join("\n");
}

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
console.log(
  solution(
    n,
    input.slice(1, input.length).map((e) => Number(e))
  )
);
