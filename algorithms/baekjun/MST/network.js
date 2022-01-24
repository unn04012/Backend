class UnionFind {
  constructor(parent) {
    this.parent = parent;
  }
  find(node) {
    if (this.parent[node] === node) return node;
    return (this.parent[node] = this.find(this.parent[node]));
  }
  union(node1, node2) {
    node1 = this.find(node1);
    node2 = this.find(node2);
    node1 < node2
      ? (this.parent[node2] = this.parent[node1])
      : (this.parent[node1] = node2);
  }
  compare(node1, node2) {
    node1 = this.find(node1);
    node2 = this.find(node2);
    return node1 === node2;
  }
}
function solution(n, m, edges) {
  let answer = 0;

  const parent = Array.from({ length: n + 1 }, (_, i) => i);
  const unionFind = new UnionFind(parent);
  // edges 비용 기준 오름차순으로 정렬
  edges.sort((a, b) => a[2] - b[2]);
  for (const [from, to, cost] of edges) {
    if (!unionFind.compare(from, to)) {
      answer += cost;
      unionFind.union(from, to);
    }
  }
  return answer;
}
let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const m = Number(input[1]);
console.log(
  solution(
    n,
    m,
    input.slice(2, m + 2).map((e) => e.split(" ").map((e) => Number(e)))
  )
);
