function solution(info, A, B) {
  const bSet = new Set([...B]);
  const [aCount, bCount] = info;
  const intersection = A.filter((e) => bSet.has(e));

  return aCount + bCount - 2 * intersection.length;
}
let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input[1].split(" ").map((e) => Number(e)),
    input[2].split(" ").map((e) => Number(e))
  )
);
