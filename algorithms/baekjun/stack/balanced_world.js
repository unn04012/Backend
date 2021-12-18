let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

solution(input.slice(0, input.length - 1));

function solution(strs) {
  let answer = 0;
  let pair = {
    ")": "(",
    "]": "[",
  };
  strs.forEach((str) => {
    let stack = [];
    for (let c of str) {
      if (pair[c]) {
        if (stack.length === 0) {
          console.log("no");
          return;
        }

        let result = stack.pop();
        if (result !== pair[c]) {
          console.log("no");
          return;
        }
      }
      if (c === "(" || c === "[") stack.push(c);
    }
    stack.length === 0 ? console.log("yes") : console.log("no");
  });
}
