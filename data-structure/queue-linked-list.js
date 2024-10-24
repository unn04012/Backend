class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if (this.rear === null) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }

  dequeue() {
    if (!this.front) return null;
    const dequeued = this.front.data;

    this.front = this.front.next;

    if (this.front === null) {
      // 없을 경우
      this.rear = null;
    }
    this.size--;

    return dequeued;
  }

  peek() {
    if (this.front === null) {
      return null;
    }
    return this.front.data;
  }

  toString() {
    let result = '';
    let current = this.front;

    while (current.next !== null) {
      result += `${current.data}-> `;
      current = current.next;
    }

    result += `${current.data}-> null`;
    return result;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.toString());
