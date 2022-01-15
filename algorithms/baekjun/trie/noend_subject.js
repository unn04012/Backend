let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(Number(input[0]), input.slice(1, input.length)));

function solution(count, info) {
  let answer = 0;
  let stack = [];
  for (const e of info) {
    if (e === "0") {
      if (stack.length) {
        const [score, curTime] = stack.pop();
        if (curTime - 1 === 0) answer += score;
        else stack.push([score, curTime - 1]);
      }
      continue;
    }
    const [num, score, time] = e.split(" ").map((e) => Number(e));
    if (time === 1) {
      answer += score;
      continue;
    }
    stack.push([score, time - 1]);
  }
  return answer;
}
