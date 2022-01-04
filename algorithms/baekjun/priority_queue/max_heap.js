class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  push(value) {
    this.heap.push(value);
    let curIndex = this.heap.length - 1; // 현재 추가된 index
    let parentIndex = Math.floor(curIndex / 2); // 추가된 인덱스의 부모 인덱스

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[curIndex] = temp;

      curIndex = parentIndex;
      parentIndex = Math.floor(curIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];
    if (returnValue === undefined) return 0;
    if (this.heap.length === 2) return this.heap.pop();
    this.heap[1] = this.heap.pop();

    let curIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[curIndex] < this.heap[leftIndex] ||
      this.heap[curIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[curIndex];
        this.heap[curIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        curIndex = rightIndex;
      } else {
        const temp = this.heap[curIndex];
        this.heap[curIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        curIndex = leftIndex;
      }
      leftIndex = curIndex * 2;
      rightIndex = curIndex * 2 + 1;
    }
    return returnValue;
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

function solution(count, numbers) {
  let answer = [];
  let maxHeap = new MaxHeap();
  for (const number of numbers) {
    // console.log(number, maxHeap.heap);
    if (number === 0) {
      answer.push(maxHeap.pop());
      continue;
    }
    maxHeap.push(number);
  }

  return answer.join("\n");
}
