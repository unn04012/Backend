function solution(diffs, times, limit) {
  let answer = 0;

  function calculatePuzzle(level) {
    let takenTime = 0;
    for (let i = 0; i < diffs.length; i++) {
      if (diffs[i] <= level) {
        takenTime += times[i];
      } else {
        const failCount = diffs[i] - level;

        takenTime += (times[i] + times[i - 1]) * failCount + times[i];
      }
    }
    return takenTime;
  }

  let left = 1;
  let right = [...diffs].sort((a, b) => a - b)[diffs.length - 1];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const takenTime = calculatePuzzle(mid);

    if (takenTime <= limit) {
      answer = mid; // 가능한 최대 level 갱신
      right = mid - 1; // 낮은 level을 시도
    } else {
      left = mid + 1; // 더 높은 level을 시도
    }
  }

  return answer;
}
console.log(solution([1, 5, 3], [2, 4, 7], 30));
console.log(solution([1, 100000], [10000, 10000], 1000000000000000));
