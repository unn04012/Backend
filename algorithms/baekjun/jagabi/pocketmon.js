let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

const count = input[0].split(" ").map((e) => Number(e));
console.log(
  solution(
    count,
    input.slice(1, 1 + count[0]),
    input.slice(1 + count[0], input.length)
  )
);

function solution(info, pocketmons, problems) {
  let answer = [];
  const numToPocketmon = new Map();
  const pocketmonToNum = new Map();
  pocketmons.forEach((pocketmon, i) => {
    numToPocketmon.set(i + 1, pocketmon);
    pocketmonToNum.set(pocketmon, i + 1);
  });
  answer = problems.map((problem) => {
    return Number(problem) > 0
      ? numToPocketmon.get(Number(problem))
      : pocketmonToNum.get(problem);
  });
  return answer.join("\n");
}
