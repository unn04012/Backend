function solution(numbers, target) {
  let answer = 0;
  let stack = [{ index: 0, sum: 0 }];

  while (stack.length) {
    const { index, sum } = stack.pop();
    if (index === numbers.length) {
      if (sum === target) answer++;
    } else {
      stack.push({ index: index + 1, sum: sum + numbers[index] });
      stack.push({ index: index + 1, sum: sum - numbers[index] });
    }
  }
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
