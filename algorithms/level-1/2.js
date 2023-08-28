function solution(name, yearning, photo) {
  var answer = [];

  for (const names of photo) {
    let score = 0;
    for (let i = 0; i < names.length; i++) {
      const index = name.findIndex((e) => e === names[i]);
      if (index !== -1) score += yearning[index];
    }
    answer.push(score);
  }

  return answer;
}

const name = ['may', 'kein', 'kain', 'radi'];
const yearning = [5, 10, 1, 3];
const photo = [
  ['may', 'kein', 'kain', 'radi'],
  ['may', 'kein', 'brin', 'deny'],
  ['kon', 'kain', 'may', 'coni'],
];

const result = solution(name, yearning, photo);
console.log(result);
