let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

console.log(
  solution(
    Number(input[0]),
    Number(input[1]),
    input.slice(2, input.length).map((e) => e.split(' ').map((e) => Number(e)))
  )
);

function solution(num, edgesCount, edges) {
  let answer = 0;

  const graph = {};

  for (const [start, end] of edges) {
    if (!graph[start]) graph[start] = [];
    if (!graph[end]) graph[end] = [];

    graph[start].push(end);
    graph[end].push(start);
  }

  const stack = [1];
  const visited = new Array(num + 1).fill(false);
  visited[1] = true;

  while (stack.length) {
    const node = stack.pop();

    if (!graph[node]) continue;

    for (const nextNode of graph[node]) {
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        stack.push(nextNode);
        answer++;
      }
    }
  }

  return answer;
}
