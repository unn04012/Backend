function solution(info, strs) {
  let answer = 0;
  const [n, m] = info;
  const nStrs = strs.slice(0, n);
  const mStrs = strs.slice(n, strs.length);
  const nSet = new Set([...nStrs]);
  for (const str of mStrs) {
    if (nSet.has(str)) answer++;
  }
  return answer;
}

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input.slice(1, input.length)
  )
);
