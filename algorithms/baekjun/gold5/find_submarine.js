let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(input[0]));

function solution(str) {
  let result = str.match(/^(100+1+|01)+$/g);
  if (result) {
    return result.join("").length === str.length ? "SUBMARINE" : "NOISE";
  }
  return "NOISE";
}
