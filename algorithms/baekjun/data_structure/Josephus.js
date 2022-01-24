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
  enqueue(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }
  isEmpty() {
    return this.size === 0;
  }
}
function solution(info) {
  const [n, k] = info;

  const circle = new Queue();
  const orders = [];
  for (let i = 0; i < n; i++) {
    circle.enqueue(i + 1);
  }
  while (!circle.isEmpty()) {
    for (let i = 1; i < k; i++) {
      circle.enqueue(circle.dequeue());
    }
    orders.push(circle.dequeue());
  }
  return "<" + orders.join(", ") + ">";
}
let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input[0].split(" ").map((e) => Number(e))));
