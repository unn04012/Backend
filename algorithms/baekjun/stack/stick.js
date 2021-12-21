let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

var a = parseInt(input[0]);

console.log(
  solution(
    a,
    input.slice(1, input.length).map((e) => Number(e))
  )
);

function solution(n, nums) {
  let answer = 0;
  let maxMath = Number.MIN_SAFE_INTEGER;
  while (nums.length) {
    let num = nums.pop();
    if (num > maxMath) {
      maxMath = num;
      answer++;
    }
  }
  return answer;
}
