let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(Number(input[0]), input.slice(1, input.length)));

function solution(count, lines) {
  let answer = [];
  for (const line of lines) {
    line.match(/[0-9]+/g)?.forEach((num) => answer.push(BigInt(num)));
  }
  return answer.sort((a, b) => (a > b ? 1 : -1)).join("\n");
}
