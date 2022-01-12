let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(
  solution(
    Number(input[0]),
    input[1].split(" ").map((e) => Number(e)),
    input[2].split(" ").map((e) => Number(e))
  )
);

function solution(count, numbers, expressions) {
  let answer = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
  const num = expressions.reduce((acc, currentValue) => acc + currentValue, 0);
  const dfs = (depth, result) => {
    if (depth === num) {
      answer[0] = Math.max(answer[0], result);
      answer[1] = Math.min(answer[1], result);
      return;
    }
    for (let i = 0; i < expressions.length; i++) {
      if (expressions[i] !== 0) {
        expressions[i]--;
        switch (i) {
          case 0:
            dfs(depth + 1, result + numbers[depth + 1]);
            break;
          case 1:
            dfs(depth + 1, result - numbers[depth + 1]);
            break;
          case 2:
            dfs(depth + 1, result * numbers[depth + 1]);
            break;
          case 3:
            dfs(depth + 1, ~~(result / numbers[depth + 1]));
            break;
        }
        expressions[i]++;
      }
    }
  };
  dfs(0, numbers[0]);

  return answer.join("\n");
}

function solution2(count, numbers, expressions) {
  let answer = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
  const makeOperator = (operators) => {
    const result = new Set();
    let check = new Array(operators.length).fill(0);
    let temp = [];
    const dfs = (depth) => {
      if (depth === operators.length) {
        result.add(temp.slice().join(""));
        return;
      }
      for (let i = 0; i < operators.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[depth] = operators[i];
          dfs(depth + 1);
          check[i] = 0;
        }
      }
    };
    dfs(0);
    return [...result];
  };
  const calculate = (x, y, operator) => {
    switch (operator) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "*":
        return x * y;
      case "/":
        return ~~(x / y);
    }
  };
  const operator = ["+", "-", "*", "/"];
  let operators = [];
  for (let i = 0; i < expressions.length; i++) {
    let count = 0;
    while (count < expressions[i]) {
      operators.push(operator[i]);
      count++;
    }
  }
  const forms = makeOperator(operators);
  for (const op of forms) {
    const numbersCopy = numbers.slice();
    for (let i = 0; i < op.length; i++) {
      let num1 = numbersCopy.shift();
      let num2 = numbersCopy.shift();
      numbersCopy.unshift(calculate(num1, num2, op[i]));
    }
    answer[0] = Math.max(answer[0], numbersCopy[0]);
    answer[1] = Math.min(answer[1], numbersCopy[0]);
  }
  return answer.join("\n");
}
