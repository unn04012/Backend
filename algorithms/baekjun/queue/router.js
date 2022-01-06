class Queue {
  constructor(n) {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.num = n;
  }
  enqueue(value) {
    if (this.size() >= this.num) return;
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const returnValue = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return returnValue;
  }
  empty() {
    return this.rear === this.front;
  }
  size() {
    return this.rear - this.front;
  }
}
let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  solution(
    Number(input[0]),
    input.slice(1, input.length).map((e) => Number(e))
  )
);

function solution(bufferSize, info) {
  let answer = "";
  let queue = new Queue(bufferSize);
  for (const number of info) {
    if (number === -1) break;
    if (number === 0) {
      queue.dequeue();
      continue;
    }
    queue.enqueue(number);
  }
  answer = queue.queue.slice(queue.front, queue.rear).join("\n");
  answer = answer.length ? answer : "empty";
  return answer;
}
