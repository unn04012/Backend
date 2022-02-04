class MinHeap {
  constructor() {
    this.heap = [null];
  }
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (parentIndex !== 0 && this._compare(value, this.heap[parentIndex])) {
      this._swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
  pop() {
    if (this.isEmpty()) return 0;
    if (this.heap.length === 2) return this.heap.pop();
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();
    let curIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this._compare(this.heap[leftIndex], this.heap[curIndex]) ||
      this._compare(this.heap[rightIndex], this.heap[curIndex])
    ) {
      if (!this.heap[leftIndex]) this._swap(rightIndex, curIndex);
      else if (!this.heap[rightIndex]) this._swap(leftIndex, curIndex);
      else if (this._compare(this.heap[leftIndex], this.heap[rightIndex])) {
        this._swap(leftIndex, curIndex);
        curIndex = leftIndex;
      } else {
        this._swap(rightIndex, curIndex);
        curIndex = rightIndex;
      }
      leftIndex = curIndex * 2;
      rightIndex = curIndex * 2 + 1;
    }
    return returnValue;
  }
  isEmpty() {
    return this.heap.length === 1;
  }
  top() {
    return this.heap[1] ? this.heap[1] : 0;
  }
  _compare(a, b) {
    let dA = Math.abs(a);
    let dB = Math.abs(b);
    if (dA <= dB) {
      if (dA === dB) {
        if (a < b) return true;
        return false;
      }
      return true;
    }
    return false;
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}
//

function solution(count, numbers) {
  let answer = [];
  const absoluteHeap = new MinHeap();
  for (const num of numbers) {
    if (num !== 0) absoluteHeap.push(num);
    else answer.push(absoluteHeap.pop());
    // console.log(absoluteHeap.heap);
  }

  return answer.join("\n");
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
