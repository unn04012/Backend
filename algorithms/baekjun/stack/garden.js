let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(
  solution(
    Number(input[0]),
    input.slice(1, input.length).map((e) => Number(e))
  )
);

function solution(heightCount, heights) {
  let answer = 0;
  let stack = [];
  for (const height of heights) {
    while (stack.length && stack[stack.length - 1] <= height) stack.pop();
    stack.push(height);
    answer += stack.length - 1;
  }
  return answer;
}
