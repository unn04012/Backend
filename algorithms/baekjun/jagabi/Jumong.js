let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
console.log(
  solution(
    Number(input[0]),
    Number(input[1]),
    input[2].split(" ").map((e) => Number(e))
  )
);

function solution(N, M, materials) {
  let answer = 0;
  materials.sort((a, b) => a - b);
  let start = 0,
    end = materials.length - 1;
  while (start < end) {
    if (materials[start] + materials[end] > M) {
      end--;
      continue;
    } else if (materials[start] + materials[end] < M) {
      start++;
      continue;
    }
    answer++;
    end--;
    start++;
  }
  return answer;
}
