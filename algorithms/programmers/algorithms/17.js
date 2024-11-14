function solution(targets) {
  var answer = 0;

  const inRange = (x, [start, end]) => {
    return x > start && x < end;
  };

  targets.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < targets.length; i++) {
    const [start, end] = targets[i];
    const pos = end - 0.5;

    // 사이에 없을 때까지
    let j = i + 1;

    while (j < targets.length && inRange(pos, targets[j])) {
      j++;
    }
    i = j - 1;

    answer++;
  }

  return answer;
}

console.log(
  solution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
    [2, 3],
  ])
);
