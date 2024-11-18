function solution(data, col, row_begin, row_end) {
  var answer = 0;

  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
    return a[col - 1] - b[col - 1];
  });

  for (let i = row_begin - 1; i <= row_end - 1; i++) {
    const row = data[i]; // i행

    const sum = row.reduce((acc, cur) => acc + (cur % (i + 1)), 0);
    answer = answer ^ sum;
  }

  return answer;
}

console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3
  )
);
