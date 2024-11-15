function solution(board) {
  // 각 플레이어의 개수를 세는 함수
  const countPieces = (board, player) => {
    return board.reduce((count, row) => count + row.split('').filter((c) => c === player).length, 0);
  };

  const oCount = countPieces(board, 'O');
  const xCount = countPieces(board, 'X');

  // 1. "O"의 개수는 "X"의 개수보다 같거나 하나 더 많아야 함
  if (oCount < xCount || oCount > xCount + 1) {
    return 0;
  }

  // 승리 조건 확인을 위한 함수
  const checkWinner = (player) => {
    const winConditions = [
      // 가로
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      // 세로
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      // 대각선
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];

    return winConditions.some((condition) => condition.every(([x, y]) => board[x][y] === player));
  };

  const oWin = checkWinner('O');
  const xWin = checkWinner('X');

  // 2. "O"와 "X"가 동시에 승리할 수는 없음
  if (oWin && xWin) {
    return 0;
  }

  // 3. "O"가 승리한 경우 "O"의 개수는 "X"보다 정확히 하나 더 많아야 함
  if (oWin && oCount !== xCount + 1) {
    return 0;
  }

  // 4. "X"가 승리한 경우 "O"와 "X"의 개수가 같아야 함
  if (xWin && oCount !== xCount) {
    return 0;
  }

  // 모든 조건을 만족하면 유효한 게임 상태
  return 1;
}
console.log(solution(['O.X', '.O.', '..X']));
