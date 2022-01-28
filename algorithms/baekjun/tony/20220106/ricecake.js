function solution(info, edges) {
  let answer = 1;
  // n : 마을 개수, m : 도로 개수, x : 최소 거리, y : 시작 마을
  const [n, m, x, y] = info;
  const dist = new Array(n).fill(Infinity);
  const roads = {};
  dist[y] = 0;
  for (const [src, dest, cost] of edges) {
    if (!roads[src]) roads[src] = [];
    if (!roads[dest]) roads[dest] = [];
    roads[src].push([src, dest, cost]);
    roads[dest].push([dest, src, cost]);
  }
  const stack = [{ node: y, cost: 0 }];
  while (stack.length) {
    const { node: current, cost: currentCost } = stack.pop();
    if (dist[current] < currentCost) continue;
    for (const [src, dest, cost] of roads[current]) {
      const nextCost = cost + currentCost;
      if (src === current && nextCost < dist[dest]) {
        dist[dest] = nextCost;
        stack.push({ node: dest, cost: nextCost });
      }
      if (dest === current && nextCost < dist[src]) {
        dist[src] = nextCost;
        stack.push({ node: src, cost: nextCost });
      }
    }
    stack.sort((a, b) => b.cost - a.cost);
  }
  let distance = 0;
  dist.sort((a, b) => a - b);
  if (dist.filter((e) => e * 2 > x).length) return -1;
  for (let i = 1; i < dist.length; i++) {
    distance += dist[i];
    if (distance * 2 > x) {
      distance = 0;
      answer += 1;
      i -= 1;
    }
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
    input[0].split(" ").map((e) => Number(e)),
    input.slice(1, input.length).map((e) => e.split(" ").map((e) => Number(e)))
  )
);
