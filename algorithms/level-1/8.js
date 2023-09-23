function solution(k, scores) {
  var answer = [];
  const cache = [];
  for (const score of scores) {
    if (cache.length < k) cache.push(score);
    else {
      const lastScore = cache[cache.length - 1];
      if (score > lastScore) {
        cache.pop();
        cache.push(score);
      }
    }
    cache.sort((a, b) => b - a);

    answer.push(cache[cache.length - 1]);
  }

  return answer;
}
const k = 4;
const scores = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

const result = solution(k, scores);
console.log(result);
