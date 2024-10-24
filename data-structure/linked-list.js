class Node {
  constructor(data) {
    this._data = data;
    this._next = null; // pointer
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._size = 0;
    // this._tail = null;
  }

  append(data) {
    const node = new Node(data);

    if (!this._head) {
      this._head = node;
    } else {
      let current = this._head; // node
      while (current._next) {
        current = current._next;
      }
      current._next = node;
    }
    this._size++;
  }

  remove(index) {
    if (index < 0 || index >= this._size) {
      console.log('Index out of bounds');
      return null;
    }

    let current = this._head; // node
    let previous = null;
    let startIndex = 0;

    while (startIndex < index) {
      previous = current;
      current = current._next;

      startIndex++;
    }
    previous._next = current._next;
    this._size--;
  }

  toString() {
    let result = '';
    let current = this._head;

    while (current._next !== null) {
      result += `${current._data}-> `;
      current = current._next;
    }

    result += `${current._data}-> null`;
    return result;
  }
}

const list = new LinkedList();

list.append(2);
list.append(3);
list.append(4);

console.log(list.toString());
list.remove(1);
console.log(list.toString());
