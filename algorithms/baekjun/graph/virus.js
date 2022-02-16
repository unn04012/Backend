function solution(n, m, pairs) {
  let answer = 0;
  const graph = {};
  for (const [a, b] of pairs) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  const visited = new Array(n + 1).fill(false);
  visited[1] = true;
  const dfs = (start) => {
    for (const next of graph[start]) {
      if (!visited[next]) {
        visited[next] = true;
        answer += 1;
        dfs(next);
      }
    }
  };
  dfs(1);
  return answer;
}

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  solution(
    Number(input[0]),
    Number(input[1]),
    input.slice(2, input.length).map((e) => e.split(" ").map((e) => Number(e)))
  )
);
