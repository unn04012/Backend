let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(input));

function solution(strs) {
  let answer = "";
  let bracketObj = {
    "}": "{",
  };
  const stable = (brackets) => {
    let stack = [];
    for (let c of brackets) {
      if (bracketObj[c]) {
        if (stack[stack.length - 1] === bracketObj[c]) {
          stack.pop();
          continue;
        }
      }
      stack.push(c);
    }
    return stack;
  };
  strs.forEach((e, i) => {
    if (e[0] === "-") return;
    let result = stable(e);
    if (result.length === 0) answer += `${i + 1}. 0` + "\n";
    else {
      let count = 0;
      while (result.length) {
        let r1 = result.pop();
        let r2 = result.pop();
        r1 === r2 ? (count += 1) : (count += 2);
      }
      answer += `${i + 1}. ${count}` + "\n";
    }
  });
  return answer;
}
