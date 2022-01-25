class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    this.size += 1;
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }
    this.tail.next = newNode; // 연결
    this.tail = newNode; // 다음 노드로 이동
  }
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }
  peek() {
    return this.head.value;
  }
}
function solution(n) {
  const queue = new Queue();
  for (let i = 1; i <= n; i++) queue.enqueue(i);
  while (queue.size !== 1) {
    queue.dequeue();
    queue.enqueue(queue.dequeue());
  }
  return queue.peek();
}

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
console.log(solution(n));
