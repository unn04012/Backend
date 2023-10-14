let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');

console.log(
  solution(
    input.slice(0, 5).map((e) => e.split(' ').map((e) => Number(e))),
    input.slice(5, 10).map((e) => e.split(' ').map((e) => Number(e)))
  )
);

function solution(bingo, targetNumbers) {
  const visited = Array.from(Array(5), () => new Array(5).fill(false));
  const findIndex = (bingos, number) => {
    for (let i = 0; i < bingos.length; i++) {
      for (let j = 0; j < bingos[i].length; j++) {
        if (bingos[i][j] === number) {
          return { i, j };
        }
      }
    }

    return {
      i: null,
      j: null,
    };
  };

  // 2차원 배열
  const checkBingo = (visitedArray) => {
    let widthBingo = 0;
    let heightBingo = 0;
    let diagonalBingo = 0;
    let biaDiagonalBingo = 0;

    // find widthBingo
    for (let i = 0; i < 5; i++) {
      let flag = true;
      for (let j = 0; j < 5; j++) {
        if (visitedArray[i][j] === false) {
          flag = false;
          break;
        }
      }
      if (flag) widthBingo++;
    }

    if (widthBingo >= 3) return true;

    for (let i = 0; i < 5; i++) {
      let flag = true;
      for (let j = 0; j < 5; j++) {
        if (visitedArray[j][i] === false) {
          flag = false;
          break;
        }
      }
      if (flag) heightBingo++;
    }
    if (widthBingo + heightBingo >= 3) return true;

    let diagonaFlag = true;
    for (let i = 0; i < 5; i++) {
      if (visitedArray[i][i] === false) {
        diagonaFlag = false;
        break;
      }
    }
    if (diagonaFlag) diagonalBingo++;
    if (widthBingo + heightBingo + diagonalBingo >= 3) return true;

    let biaDiagonalFlag = true;
    let j = 0;
    for (let i = 4; i >= 0; i--) {
      if (visitedArray[i][j] === false) {
        biaDiagonalFlag = false;
        break;
      }
      j++;
    }

    if (biaDiagonalFlag) biaDiagonalBingo++;
    if (widthBingo + heightBingo + diagonalBingo + biaDiagonalBingo >= 3) return true;

    return false;
  };

  let sequence = 0;

  for (const numbers of targetNumbers) {
    for (number of numbers) {
      sequence++;
      const { i, j } = findIndex(bingo, number);
      if (i === null || j === null) throw new Error('null');

      visited[i][j] = true;
      const result = checkBingo(visited);
      if (result) return sequence;
    }
  }
  return sequence;
}
