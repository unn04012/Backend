function solution(ingredients) {
  var answer = 0;
  const arr = [];

  for (const ingredient of ingredients) {
    arr.push(ingredient);
    if (arr.length >= 4) {
      const tempStr = arr.slice(-4).join('');

      if (tempStr === '1231') {
        answer++;
        for (let i = 0; i < 4; i++) arr.pop();
      }
    }
  }
  return answer;
}

const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

const result = solution(ingredient);

console.log(result);
