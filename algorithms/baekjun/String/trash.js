function solution(info, noHears, noLooks) {
  let answer = [];
  noLooks = new Set(noLooks);
  for (const noHear of noHears) {
    if (noLooks.has(noHear)) answer.push(noHear);
  }
  return answer.length + "\n" + answer.sort().join("\n");
}

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map((e) => Number(e));
console.log(
  solution([n, m], input.slice(1, 1 + n), input.slice(n + 1, input.length))
);
