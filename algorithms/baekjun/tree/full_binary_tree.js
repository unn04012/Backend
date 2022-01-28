function solution(depth, numbers) {
  const buildings = circuit(depth, numbers);
  return buildings.map((e) => e.join(" ")).join("\n");
}
const circuit = (k, numbers) => {
  const result = [];
  const dfs = (depth, start, end) => {
    if (depth === k + 1) return;
    let mid = Math.floor((start + end) / 2); // 3
    if (!result[depth - 1]) result[depth - 1] = [];
    result[depth - 1].push(numbers[mid]);
    dfs(depth + 1, start, mid - 1);
    dfs(depth + 1, mid + 1, end);
  };
  dfs(1, 0, numbers.length - 1);
  return result;
};

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  solution(
    Number(input[0]),
    input[1].split(" ").map((e) => Number(e))
  )
);
