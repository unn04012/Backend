let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

// 파란색 : 상민 : A
// 빨간색 : 지수 : B
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
    const val = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return val;
  }
  size() {
    return this.rear - this.front;
  }
  isEmpty() {
    return this.rear === this.front;
  }
  peek() {
    return this.queue[this.rear - 1] ? this.queue[this.rear - 1] : 0;
  }
  bottom() {
    return this.queue[this.front];
  }
}
console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input.slice(1, input.length)
  )
);
function solution(info, customerInfo) {
  let answer = "";
  let [sangminTime, jisuTime, customerNum] = info;
  sangminTime = Number(sangminTime);
  jisuTime = Number(jisuTime);
  const jisu = new Queue();
  const sangmin = new Queue();
  let bTime = 0, // 종료시간
    rTime = 0;
  customerInfo.forEach((info) => {
    let [startTime, color, customerNum] = info.split(" ");
    startTime = Number(startTime);
    customerNum = Number(customerNum);
    if (color === "B") {
      // 상민이
      if (startTime < bTime) startTime = bTime;
      for (let i = 0; i < customerNum; i++) {
        sangmin.enqueue(startTime);
        startTime += sangminTime;
        bTime = startTime;
      }
      return;
    }
    if (startTime < rTime) startTime = rTime;
    for (let i = 0; i < customerNum; i++) {
      jisu.enqueue(startTime);
      startTime += jisuTime;
      rTime = startTime;
    }
  });
  let jisuObj = {
    total: jisu.queue.length,
  };
  let sangminObj = {
    total: sangmin.queue.length,
  };
  const sangminNum = [];
  const jisuNum = [];
  let num = 1;
  while (!jisu.isEmpty() && !sangmin.isEmpty()) {
    const sTime = sangmin.bottom();
    const jTime = jisu.bottom();
    if (sTime < jTime) {
      while (sangmin.bottom() < jTime) {
        sangmin.dequeue();
        sangminNum.push(num++);
      }
      continue;
    }
    if (sTime === jTime) {
      sangmin.dequeue();
      sangminNum.push(num++);
      continue;
    }
    // 지수가 더 작을 때
    while (jisu.bottom() < sTime) {
      jisu.dequeue();
      jisuNum.push(num++);
    }
  }
  while (!jisu.isEmpty()) {
    jisu.dequeue();
    jisuNum.push(num++);
  }
  while (!sangmin.isEmpty()) {
    sangmin.dequeue();
    sangminNum.push(num++);
  }
  answer += sangminObj.total + "\n";
  for (const num of sangminNum) answer += num + " ";
  answer += "\n";
  answer += jisuObj.total + "\n";
  for (const num of jisuNum) answer += num + " ";
  return answer;
}
