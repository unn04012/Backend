class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n + 1 }, (_, i) => i);
  }
  //최상위 부모 찾기
  find(node) {
    if (this.parent[node] === node) return node;
    return (this.parent[node] = this.find(this.parent[node]));
  }
  union(a, b) {
    a = this.find(a);
    b = this.find(b);
    a < b ? (this.parent[b] = a) : (this.parent[a] = b);
  }
  compare(a, b) {
    a = this.find(a);
    b = this.find(b);
    return a === b;
  }
}

function solution(size, edges) {
  let answer = 0;
  const [nodeCount, edgeCount] = size;
  edges.sort((a, b) => a[2] - b[2]);
  const unionFind = new UnionFind(nodeCount);
  let edge = [];
  for (const [a, b, cost] of edges) {
    if (!unionFind.compare(a, b)) {
      answer += cost;
      edge.push(cost);
      unionFind.union(a, b);
    }
  }

  return answer;
}
let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input.slice(1, input.length).map((e) =>
      e
        .trim()
        .split(" ")
        .map((e) => Number(e))
    )
  )
);
