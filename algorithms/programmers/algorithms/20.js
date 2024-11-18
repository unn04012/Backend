function solution(numbers) {
  const answer = [];
  const stack = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    // 스택에 값이 존재하면서
    while (stack.length && stack[stack.length - 1] <= num) {
      stack.pop();
    }
    if (stack.length === 0) answer.push(-1);
    if (stack.length) answer.push(stack[stack.length - 1]);

    stack.push(num);
  }
  return answer.reverse();
}

console.log(solution([9, 1, 5, 3, 6, 2]));
