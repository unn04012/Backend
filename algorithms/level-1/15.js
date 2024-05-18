function solution(n) {
  const answer = [];
  const stringToN = String(n);
  for (let i = stringToN.length - 1; i >= 0; i--) {
    answer.push(Number(stringToN[i]));
  }
  return answer;
}

console.log(solution(12345));
