let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input.slice(1, input.length)
  )
);

function solution(info, numbers) {
  let answer = [];
  const [total, leng] = info;
  const enrolement = new Set();
  for (const number of numbers) {
    if (!enrolement.has(number)) {
      enrolement.add(number);
      continue;
    }
    // 만약 이미 있다면
    enrolement.delete(number);
    enrolement.add(number);
  }
  return [...enrolement].slice(0, total).join("\n");
}
