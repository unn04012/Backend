function solution(n, number) {
  const answer = Array.from(Array(n), () => new Array(n));
  const laps = Math.floor((n - 1) / 2);
  let x = laps - 1,
    y = laps;
  let num = 2;
  const coord = [];
  answer[laps][laps] = 1;
  if (number === 1) coord.push(laps + 1, laps + 1);
  const spin = (spinCount) => {
    for (let i = 0; i < spinCount * 2; i++) {
      if (num === number) coord.push(x + 1, y + 1);
      answer[x][y++] = num++;
    }
    x++;
    y--;

    for (let i = 0; i < spinCount * 2; i++) {
      if (num === number) coord.push(x + 1, y + 1);
      answer[x++][y] = num++;
    }
    x--;
    y--;
    for (let i = 0; i < spinCount * 2; i++) {
      if (num === number) coord.push(x + 1, y + 1);
      answer[x][y--] = num++;
    }
    x--;
    y++;
    for (let i = 0; i < spinCount * 2; i++) {
      if (num === number) coord.push(x + 1, y + 1);
      answer[x--][y] = num++;
    }
  };
  for (let i = 1; i <= laps; i++) {
    spin(i);
  }
  return answer.map((e) => e.join(" ")).join("\n") + "\n" + coord.join(" ");
}
function solution(n, number) {
  const answer = Array.from(Array(n), () => new Array(n));
  const laps = Math.floor((n - 1) / 2);
  let x = laps - 1,
    y = laps;
  let num = 2;
  const coord = [];
  answer[laps][laps] = 1;
  if (number === 1) coord.push(laps + 1, laps + 1);
  const spin = (spinCount) => {
    for (let i = 0; i < spinCount * 2; i++) {
      if (num === number) coord.push(x + 1, y + 1);
      answer[x][y++] = num++;
    }
    x++;
    y--;

    for (let i = 0; i < spinCount * 2; i++) {
      if (num === number) coord.push(x + 1, y + 1);
      answer[x++][y] = num++;
    }
    x--;
    y--;
    for (let i = 0; i < spinCount * 2; i++) {
      if (num === number) coord.push(x + 1, y + 1);
      answer[x][y--] = num++;
    }
    x--;
    y++;
    for (let i = 0; i < spinCount * 2; i++) {
      if (num === number) coord.push(x + 1, y + 1);
      answer[x--][y] = num++;
    }
  };
  for (let i = 1; i <= laps; i++) {
    spin(i);
  }
  return answer.map((e) => e.join(" ")).join("\n") + "\n" + coord.join(" ");
}

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(Number(input[0]), Number(input[1])));
