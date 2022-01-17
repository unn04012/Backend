class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.isEmpty()) return;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      (this.heap[leftIndex] &&
        this.heap[currentIndex].cost > this.heap[leftIndex].cost) ||
      (this.heap[rightIndex] &&
        this.heap[currentIndex].cost > this.heap[rightIndex].cost)
    ) {
      if (
        this.heap[rightIndex] &&
        this.heap[leftIndex].cost > this.heap[rightIndex].cost
      ) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }

  isEmpty() {
    return this.heap.length === 1;
  }
}
let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

const count = input[0].split(" ").map((e) => Number(e));
const start = Number(input[1]);
const edges = input
  .slice(2, 2 + count[1])
  .map((e) => e.split(" ").map((e) => Number(e)));
console.log(solution(count, start, edges));

function solution(count, start, edges) {
  let answer = [];
  let dist = new Array(count[0] + 1).fill(Infinity);
  let heap = new MinHeap();
  dist[start] = 0;
  const graph = {};
  for (const [src, dest, cost] of edges) {
    if (!graph[src]) graph[src] = [];
    graph[src].push([src, dest, cost]);
  }
  heap.push({ node: start, cost: 0 });
  while (!heap.isEmpty()) {
    const { node: current, cost: currentCost } = heap.pop();
    if (graph[current]) {
      for (const [src, dest, cost] of graph[current]) {
        const nextCost = cost + currentCost;
        if (src === current && nextCost < dist[dest]) {
          dist[dest] = nextCost;
          heap.push({ node: dest, cost: nextCost });
        }
      }
    }
  }
  for (let i = 1; i < dist.length; i++) {
    if (dist[i] === Infinity) {
      answer.push("INF");
      continue;
    }
    answer.push(dist[i]);
  }
  return answer.join("\n");
}
