let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

console.log(
  solution(
    input[0].split(' ').map((e) => Number(e)),
    input.slice(1, input.length).map((e) => e.split(' ').map((e) => Number(e)))
  )
);

function solution(size, boards) {
  const answer = [];
  const [n, m, startNode] = size;

  const graph = {};

  // draw graph
  for (const [start, end] of boards) {
    if (!graph[start]) {
      graph[start] = [];
    }
    if (!graph[end]) {
      graph[end] = [];
    }

    graph[start].push(end);
    graph[end].push(start);
  }

  for (const value of Object.values(graph)) {
    value.sort((a, b) => b - a);
  }
  const dfs = () => {
    const stack = [startNode];
    const nodes = [];
    const visited = new Array(n + 1).fill(false);
    while (stack.length) {
      const node = stack.pop();
      if (!visited[node]) {
        visited[node] = true;
        nodes.push(node);
      }
      if (!graph[node]) {
        break;
      }
      for (const v of graph[node]) {
        if (!visited[v]) {
          stack.push(v);
        }
      }
    }
    return nodes;
  };

  const bfs = () => {
    for (const value of Object.values(graph)) {
      value.sort((a, b) => a - b);
    }
    const queue = [startNode];
    const visited = new Array(n + 1).fill(false);
    const nodes = [];
    while (queue.length) {
      const node = queue.shift();
      if (!visited[node]) {
        visited[node] = true;
        nodes.push(node);
      }

      if (!graph[node]) {
        break;
      }

      for (const v of graph[node]) {
        if (!visited[v]) {
          queue.push(v);
        }
      }
    }

    return nodes;
  };

  answer.push(dfs());
  answer.push(bfs());

  return answer.map((e) => e.join(' ')).join('\n');
}
