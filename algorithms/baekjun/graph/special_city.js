class MinHeap {
  constructor() {
    this.heap = [null];
  }
  push(value) {
    this.heap.push(value);
    let curIndex = this.heap.length - 1;
    let parentIndex = Math.floor(curIndex / 2);
    while (parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
      this._swap(curIndex, parentIndex);
      curIndex = parentIndex;
      parentIndex = Math.floor(curIndex / 2);
    }
  }
  pop() {
    if (this.isEmpty()) return null;
    if (this.heap.length === 2) return this.heap.pop();
    const value = this.heap[1];
    this.heap[1] = this.heap.pop();
    let cur = 1;
    let left = 2;
    let right = 3;
    while (
      (this.heap[left] && this.heap[cur].cost > this.heap[left].cost) ||
      (this.heap[right] && this.heap[cur].cost > this.heap[right].cost)
    ) {
      if (!this.heap[left]) this._swap(right, cur);
      else if (!this.heap[right]) this._swap(left, cur);
      else if (this.heap[right].cost > this.heap[left].cost) {
        this._swap(left, cur);
        cur = left;
      } else if (this.heap[right].cost <= this.heap[left].cost) {
        this._swap(right, cur);
        cur = right;
      }
      left = cur * 2;
      right = cur * 2 + 1;
    }
    return value;
  }
  isEmpty() {
    return this.heap.length === 1;
  }
  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}
function solution(info, edges) {
  let answer = [];
  const [n, m, k, x] = info;
  const cities = {};
  for (const [from, to] of edges) {
    if (!cities[from]) cities[from] = [];
    cities[from].push(to);
  }
  const dist = new Array(n + 1).fill(Infinity);
  dist[x] = 0;
  const heap = new MinHeap();
  heap.push({ start: x, cost: 0 });
  while (!heap.isEmpty()) {
    const { start, cost } = heap.pop();
    if (dist[start] < cost) continue;
    if (cities[start]) {
      for (const next of cities[start]) {
        const nextCost = cost + 1;
        if (nextCost < dist[next]) {
          dist[next] = nextCost;
          heap.push({ start: next, cost: nextCost });
        }
      }
    }
  }
  dist.forEach((e, i) => {
    if (e === k) answer.push(i);
  });

  return answer.length ? answer.join("\n") : "-1";
}

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input.slice(1, input.length).map((e) => e.split(" ").map((e) => Number(e)))
  )
);
