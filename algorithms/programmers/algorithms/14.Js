function solution(n, m, section) {
  let answer = 0;

  let index = 1;
  for (let i = 0; i < section.length; i++) {
    if (index <= section[i]) {
      answer++;
      index = section[i] + m;
    }
  }

  return answer;
}

console.log(solution(10, 4, [1, 2, 3, 10]));
