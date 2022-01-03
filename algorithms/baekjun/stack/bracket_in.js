let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input[0]));

function solution(strs) {
  let answer = "";
  let stack = [];
  for (const str of strs) {
    if (str === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
        continue;
      }
    }
    stack.push(str);
  }

  return stack.length;
}
