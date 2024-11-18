class Queue {
  constructor(data) {
    this.queue = [data];
    this.front = 0;
    this.rear = 0;
    this.size = 1;
  }

  enqueue(data) {
    this.queue.push(data);
    this.rear++;
    this.size++;
  }

  dequeue() {
    const data = this.queue[this.front];
    delete this.queue[this.front];

    this.front++;
    this.size--;
    return data;
  }

  length() {
    return this.size;
  }
}
function solution(x, y, n) {
  let answer = -1;

  const getResult = (x) => {
    return [x + n, x * 2, x * 3];
  };

  const queue = new Queue({ value: x, depth: 0 });
  const visited = new Set(); // 방문 기록
  visited.add(x);

  while (queue.length()) {
    const { value, depth } = queue.dequeue();
    if (value === y) {
      answer = depth;
      break;
    }

    const results = getResult(value);

    for (const result of results) {
      if (result > y || visited.has(result)) continue;
      visited.add(result);
      queue.enqueue({ value: result, depth: depth + 1 });
    }
  }
  return answer;
}

console.log(solution(10, 40, 5));
