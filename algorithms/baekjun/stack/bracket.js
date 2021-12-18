let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

var a = parseInt(input[0]);

solution(a, input.slice(1, input.length));

function solution(n, brackets) {
  let answer = [];
  answer = brackets.map((s) => {
    let stack = [];
    for (let c of s) {
      if (c === ")") {
        if (stack.length === 0) {
          return "NO";
        }
        stack.pop();
        continue;
      }
      stack.push(c);
    }

    let result = stack.length === 0 ? "YES" : "NO";
    return result;
  });

  return answer.forEach((e) => console.log(e));
}
