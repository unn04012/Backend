let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(input[0], input.slice(1, input.length)));

function solution(info, nums) {
  let answer = "";
  let graph = {};
  let [node, edge, start] = info.split(" ");
  node = Number(node);
  if (node === 1) return start;
  nums
    .map((num) => {
      num = num.split(" ");
      return [num[0], num[1]];
    })
    .forEach(([from, to]) => {
      if (!graph[from]) graph[from] = [];
      if (!graph[to]) graph[to] = [];
      graph[from].push(to);
      graph[to].push(from);
    });
  const visited = new Array(node + 1).fill(false);
  for (const key in graph) {
    graph[key].sort((a, b) => Number(a) - Number(b));
  }
  console.log(graph);
  const dfs = (depth, node) => {
    answer += node + " ";
    if (depth === node) {
      return;
    }

    visited[node] = true;
    if (!graph[node]) return;
    for (let next of graph[node]) {
      if (!visited[Number(next)]) dfs(depth + 1, next);
    }
  };
  dfs(0, start);
  answer += "\n";

  let queue = [start];
  visited.fill(false);
  while (queue.length) {
    let cur = queue.shift();
    if (!visited[cur]) answer += cur + " ";

    visited[cur] = true;
    if (!graph[cur]) break;
    for (const next of graph[cur]) {
      if (!visited[next]) queue.push(next);
    }
  }
  return answer;
}
