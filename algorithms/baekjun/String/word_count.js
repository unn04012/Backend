let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input[0]));

function solution(strs) {
  return strs.length ? strs.split(" ").length : 0;
}
