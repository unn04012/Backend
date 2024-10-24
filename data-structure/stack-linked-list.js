class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const node = new Node(data);
    if (this.top === null) {
      this.top = node;
    } else {
      const temp = this.top;
      this.top = node;
      this.top.next = temp;
    }
    this.size++;
  }

  pop() {
    if (!this.top) return null;

    const popped = this.top;
    this.top = this.top.next;

    this.size--;

    return popped.data;
  }

  toString() {
    let result = '';
    let current = this.top;

    while (current.next !== null) {
      result += `${current.data}-> `;
      current = current.next;
    }

    result += `${current.data}-> null`;
    return result;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(4);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.toString());
