function solution(foods) {
  var answer = '';

  const me = [];

  for (let i = 1; i < foods.length; i++) {
    const count = Math.floor(foods[i] / 2);
    console.log(count);
    for (let j = 0; j < count; j++) me.push(i);
  }
  const meStr = me.join('');

  return meStr + '0' + me.reverse().join('');
}

const food = [1, 7, 1, 2];
const result = solution(food);
console.log(result);
