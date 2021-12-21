let input = require("fs")
  .readFileSync("./problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input[0]));

function solution(strs) {
  let answer = 0;
  let sum = 0;
  if (!strs.includes("0")) return -1;
  for (const num of strs) {
    sum += Number(num);
  }
  if (sum % 3 !== 0) return -1;
  answer = strs
    .split("")
    .sort((a, b) => {
      if (a > b) return -1;
    })
    .join("");

  return answer;
}
