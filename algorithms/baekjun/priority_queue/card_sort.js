class MinHeap {
  constructor() {
    this.heap = [null];
  }
  push(value) {
    this.heap.push(value);
    let curIndex = this.heap.length - 1;
    let parentIndex = Math.floor(curIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] > value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[curIndex] = temp;
      curIndex = parentIndex;
      parentIndex = Math.floor(curIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];
    if (this.heap.length === 2) return this.heap.pop();
    this.heap[1] = this.heap.pop();
    let curIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      this.heap[curIndex] > this.heap[leftIndex] ||
      this.heap[curIndex] > this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] > this.heap[rightIndex]) {
        // 왼쪽이 더 크므로 오른쪽 자식과 부모를 교환
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

function solution(count, cards) {
  let answer = 0;
  let minHeap = new MinHeap();
  for (const card of cards) minHeap.push(card);
  while (minHeap.heap.length !== 2) {
    let card1 = minHeap.pop();
    let card2 = minHeap.pop();
    answer += card1 + card2;
    minHeap.push(card1 + card2);
  }

  return answer;
}
