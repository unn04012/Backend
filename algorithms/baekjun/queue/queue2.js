let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

class Queue {
  constructor() {
    this.queue = [];
    this.start = 0;
    this.rear = 0;
  }
  push(value) {
    this.queue[this.rear++] = value;
  }
  pop() {
    if (this.rear === this.start) return -1;
    const value = this.queue[this.start];
    delete this.queue[this.start];
    this.start++;
    return value;
  }
  size() {
    return this.rear - this.start;
  }
  empty() {
    return this.rear === this.start ? 1 : 0;
  }
  front() {
    return this.rear === this.start ? -1 : this.queue[this.start];
  }
  back() {
    return this.rear === this.start ? -1 : this.queue[this.rear - 1];
  }
}

console.log(solution(input[0], input.slice(1, input.length)));

function solution(strs, commands) {
  let answer = "";
  let queue = new Queue();
  commands.forEach((command) => {
    const [cmd, val] = command.split(" ");
    if (val) {
      queue[cmd](val);
      return;
    }
    answer += queue[cmd]() + "\n";
  });

  return answer.slice(0, answer.length - 1);
}
