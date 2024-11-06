function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    const apples = score.slice(i, i + m);

    const totalScore = apples.length === m ? apples[apples.length - 1] * m : 0;

    answer += totalScore;
  }

  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
