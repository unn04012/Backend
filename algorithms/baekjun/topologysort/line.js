class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const returnValue = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return returnValue;
  }
  peek() {
    return this.queue[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  isEmpty() {
    return this.rear === this.front ? true : false;
  }
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

function solution(info, numbers) {
  let answer = "";
  const [N, M] = info;
  const arr = [];
  const inDegree = new Array(N + 1).fill(0);
  numbers.forEach(([A, B]) => {
    if (!arr[A]) arr[A] = [];
    arr[A].push(B);
    inDegree[B]++;
  });
  const topologySort = () => {
    const result = [];
    const queue = new Queue();
    for (let i = 1; i <= N; i++) if (inDegree[i] === 0) queue.enqueue(i);
    for (let i = 1; i <= N; i++) {
      if (queue.isEmpty()) {
        console.log("cycle");
        return;
      }
      const x = queue.dequeue();
      result[i] = x;
      if (arr[x]) {
        for (let i = 0; i < arr[x].length; i++) {
          let y = arr[x][i];
          if (--inDegree[y] === 0) queue.enqueue(y);
        }
      }
    }
    return result.slice(1, result.length).join(" ");
  };

  answer = topologySort();
  return answer;
}
