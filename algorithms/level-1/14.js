function solution(numbers) {
  const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const withoutNumbers = allNumbers.map((num) => {
    return numbers.find((e) => e === num) ? null : num;
  });

  return withoutNumbers.filter((e) => !Number.isNaN(e)).reduce((acc, cur) => acc + cur, 0);
}

console.log(solution([5, 8, 4, 0, 6, 7, 9]));
