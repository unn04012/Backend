let m = 4;
let n = 5;
let board = ["BAAB", "BAAB"]
solution(m, n, board);

function solution(m, n, board) {
    var answer = 0;
    let boardTable = [];
    let flag = false;
    let count = 0;

    board.forEach((row, index) => {
        if (!boardTable[index]) boardTable[index] = [];
        for (let i = 0; i < row.length; i++) {
            boardTable[index].push(row[i]);
        }
    });
    const transpose = matrix => matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );
    boardTable = transpose(boardTable);
    boardTable = boardTable.map(element => element.reverse());
    const isLower = (friend) => {
        if (friend === friend.toLowerCase()) return true;
        return false;
    }

    const bomb = () => {
        flag = false;
        for (let row = 0; row < boardTable.length - 1; row++) {
            for (let col = 0; col < boardTable[row].length - 1; col++) {
                // if (col < 0 || col + 1 > boardTable[row].length - 1 || row < 0 || row + 1 > boardTable.length - 1) continue;
                // if (col === boardTable[row].length - 2 && boardTable[row].length > boardTable[row + 1].length) continue;
                if (boardTable[row + 1].length <= col + 1) continue;

                let friend = boardTable[row][col].toLowerCase();
                if (friend === boardTable[row][col + 1].toLowerCase() && friend === boardTable[row + 1][col].toLowerCase() && friend === boardTable[row + 1][col + 1].toLowerCase()) {
                    boardTable[row][col] = boardTable[row][col + 1] = boardTable[row + 1][col] = boardTable[row + 1][col + 1] = friend;
                }
            }
        }
        boardTable.forEach((friends, row) => {
            for (let col = 0; col < friends.length; col++) {
                if (isLower(friends[col])) {
                    flag = true;
                    count++;
                    friends.splice(col, 1);
                    col--
                }
            }
        });
    }

    do {
        bomb();
    } while (flag)
    answer = count;
    return answer;
}

