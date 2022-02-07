function solution(n, numbers) {
  let answer = 1;
  const dp = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (numbers[i] > numbers[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    answer = Math.max(dp[i], answer);
  }
  return answer;
}

let input = require("fs")
  .readFileSync("../../problem.txt")
  .toString()
  .trim()
  .split("\n");
console.log(
  solution(
    Number(input[0]),
    input[1].split(" ").map((e) => Number(e))
  )
);
