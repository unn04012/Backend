function solution(number, limit, power) {
  let answer = 0;

  const countDivisor = (number) => {
    let count = 0;

    for (let i = 1; i <= Math.sqrt(number); i++) {
      if (Math.sqrt(number) === i) {
        count += 1;
        continue;
      }
      if (number % i === 0) count += 2;
    }

    return count;
  };

  for (let i = 1; i <= number; i++) {
    const numDivisor = countDivisor(i);
    if (numDivisor > limit) answer += power;
    else answer += numDivisor;
  }

  return answer;
}

console.log(solution(10, 3, 2));
