let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(input[0], input[1]));

function solution(str, bomb) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let flag = true;
    if (bomb[bomb.length - 1] === str[i]) {
      for (let j = 0; j < bomb.length - 1; j++) {
        if (bomb[bomb.length - (j + 2)] !== stack[stack.length - (j + 1)]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        // 똑같을 경우
        for (let l = 0; l < bomb.length - 1; l++) {
          stack.pop();
        }
        // i -= bomb.length;
      } else {
        stack.push(str[i]);
      }
      continue;
    }
    stack.push(str[i]);
  }

  return stack.length ? stack.join("") : "FRULA";
}
