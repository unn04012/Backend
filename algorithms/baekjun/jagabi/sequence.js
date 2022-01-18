let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

const count = Number(input[0]);
console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input[1].split(" ").map((e) => Number(e))
  )
);

function solution(info, temperatures) {
  let answer = 0;
  const [days, number] = info;
  let sum = 0;
  for (let i = 0; i < number; i++) sum += temperatures[i];
  answer = sum;
  for (let i = 0, j = number; j < temperatures.length; j++) {
    sum = sum + temperatures[j] - temperatures[i++];
    answer = Math.max(answer, sum);
  }
  return answer;
}
