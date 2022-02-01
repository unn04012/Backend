function solution(strs) {
  let answer = [];
  let [S, K] = strs;
  S = S.replace(/[0-9]/g, "");
  return S.includes(K) ? 1 : 0;
}

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
