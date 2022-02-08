/**
 * 
  4번재의 9 -> 3번째의 1번째 -> 2번째의 1번째 -> 1번쨰의 1번째의 반대
  3번째의 2번째 -> 2번째의 2번쨰 -> 1번째의 2번째
 */
function solution(num) {
  let answer = BigInt(0);
  num--;
  while (num) {
    answer += num % BigInt(2);
    num /= BigInt(2);
  }
  return Number(answer % BigInt(2));
}

let input = require("fs")
  .readFileSync("../../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(BigInt(input[0])));
