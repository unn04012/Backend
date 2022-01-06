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
const [fees, cars] = input[0].split(" ").map((e) => Number(e));
console.log(
  solution(
    [fees, cars],
    input.slice(1, fees + 1).map((e) => Number(e)),
    input.slice(fees + 1, fees + 1 + cars).map((e) => Number(e)),
    input.slice(fees + 1 + cars, input.length).map((e) => Number(e))
  )
);

function solution(info, fees, weights, records) {
  let answer = 0;
  const [place, carCount] = info;
  const parking = new Map();
  const carInfo = new Map();
  const placeInfo = new Map();
  for (let i = 1; i <= carCount; i++) {
    carInfo.set(i, weights[i - 1]);
  }
  for (let i = 1; i <= place; i++) {
    placeInfo.set(i, fees[i - 1]);
  }
  const queue = new Queue();

  const findPlace = () => {
    // 남은 주차 공간 있는 지 확인
    for (let i = 1; i <= place; i++) {
      if (!parking.has(i)) return i;
    }
    return false;
  };
  const findPlaceByCarNumber = (number) => {
    for (const [key, value] of parking) {
      if (-value === number) return key;
    }
  };
  for (const record of records) {
    if (record < 0) {
      const placeNum = findPlaceByCarNumber(record);
      parking.delete(placeNum);
      if (!queue.empty()) {
        let carNum = queue.dequeue();
        parking.set(placeNum, carNum);
        answer += carInfo.get(carNum) * placeInfo.get(placeNum);
      }
      continue;
    }
    let result = findPlace(); // 주차 공간이 있는지
    if (!result) {
      // 없으면 queue삽입
      queue.enqueue(record);
      continue;
    }
    parking.set(result, record);
    answer += carInfo.get(record) * placeInfo.get(result);
  }
  return answer;
}
