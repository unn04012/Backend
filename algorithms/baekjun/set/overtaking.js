let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
let number = Number(input[0]);
console.log(
  solution(
    number,
    input.slice(1, 1 + number),
    input.slice(1 + number, input.length)
  )
);

function solution(number, enters, exits) {
  let answer = 0;
  let enterCar = new Map();
  let exitCar = new Map();
  enters.forEach((car, i) => {
    enterCar.set(car, i);
  });
  exits.forEach((car, i) => {
    exitCar.set(car, enterCar.get(car));
  });
  for (const [carNumber, order] of exitCar) {
    let [firstValue] = enterCar.values();
    if (order > firstValue) answer++;
    enterCar.delete(carNumber);
  }
  return answer;
}
