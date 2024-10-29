class MinHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  add(data) {
    this.heap.push(data);
    this.#bubbleUp();
  }

  #bubbleUp() {
    let index = this.heap.length - 1; // 마지막 index
    let parentIdx = Math.floor((index - 1) / 2);

    while (this.heap[parentIdx] && this.heap[parentIdx] > this.heap[index]) {
      this.swap(parentIdx, index);

      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  delete() {
    if (this.heap.length === 1) {
      return this.heap.pop(); // 힙의 크기가 1인 경우, 힙에서 값을 삭제하고 return
    }

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.#bubbleDown();
    return value;
  }

  #bubbleDown() {
    let index = 0;
    let leftIdx = index * 2 + 1; // 왼쪽 자식 노드의 index
    let rightIdx = index * 2 + 2; // 오른쪽 자식 노드의 index

    // 부모가 자식보다 클 경우
    while ((this.heap[leftIdx] && this.heap[index] > this.heap[leftIdx]) || (this.heap[rightIdx] && this.heap[index] > this.heap[rightIdx])) {
      // 오른쪽 자식이 더 작을 경우
      let smallerIdx = leftIdx;

      if (
        this.heap[rightIdx] &&
        this.heap[rightIdx] < this.heap[smallerIdx] // 오른쪽 자식 노드가 더 작다면
      ) {
        smallerIdx = rightIdx; // 오른쪽 자식 노드의 index로 변경
      }

      this.swap(smallerIdx, index);
      index = smallerIdx;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }
  }
}

const minHeap = new MinHeap();

minHeap.add(1);
minHeap.add(10);
minHeap.add(5);
minHeap.add(4);
minHeap.add(7);

console.log(minHeap.peek());
console.log(minHeap.delete());
console.log(minHeap.peek());
console.log(minHeap.delete());
console.log(minHeap.peek());
