let game_board = [[1, 1, 0, 0, 1, 0], [0, 0, 1, 0, 1, 0], [0, 1, 1, 0, 0, 1], [1, 1, 0, 1, 1, 1], [1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 0, 0]];
let table = [[1, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 0], [0, 1, 1, 0, 1, 1], [0, 0, 1, 0, 0, 0], [1, 1, 0, 1, 1, 0], [0, 1, 0, 0, 0, 0]];
game_board = [[0, 0, 0], [1, 1, 0], [1, 1, 1]];
table = [[1, 1, 1], [1, 0, 0], [0, 0, 0]]
console.log(solution(game_board, table));
function solution(game_board, table) {
    var answer = 0;
    let size = table.length;
    let squares = [];
    let table_squares = [];
    let delta = {
        'up': [-1, 0],
        'down': [1, 0],
        'left': [0, -1],
        'right': [0, 1],
    };
    let visited = Array.from(Array(size), () => new Array(size).fill(false));
    table = table.map(e => {
        let temp = [...e]
        for (let i = 0; i < e.length; i++) {
            temp[i] = e[i] === 0 ? 1 : 0;
        }
        return temp;
    })
    const dfs = (board, row, col) => {
        let stack = [[row, col]];
        let minX = 100;
        let maxX = -1;
        let minY = 100;
        let maxY = -1;

        while (stack.length) {
            let [row, col] = stack.pop();
            visited[row][col] = true;
            minX = Math.min(minX, row)
            maxX = Math.max(maxX, row)
            minY = Math.min(minY, col)
            maxY = Math.max(maxY, col)
            for (const [key, value] of Object.entries(delta)) {
                let newRow = row + value[0]
                let newCol = col + value[1]
                if (newRow < 0 || newRow > size - 1 || newCol < 0 || newCol > size - 1) continue;
                if (visited[newRow][newCol]) continue;
                if (board[newRow][newCol] === 0) stack.push([newRow, newCol])

            }
        }
        return [[minX, minY], [maxX, maxY]]

    }
    const makeSquare = (board, minX, minY, maxX, maxY) => {
        let square = [];
        for (let row = minX, i = 0; row <= maxX; row++, i++) {
            for (let col = minY, j = 0; col <= maxY; col++, j++) {
                if (!square[i]) square[i] = [];
                square[i][j] = board[row][col];
            }
        }
        return square;
    }
    const makeString = (board) => {
        let temp = [];
        board.forEach(e => {
            e = e.map(e1 => e1.join('') + 'n');
            temp.push(e.join(''));
        })
        return temp
    }
    const rotate = (board, square) => {
        table_squares.push(square)
        for (let k = 0; k < 3; k++) {
            let width = square.length;
            let height = square[0].length;
            let temp = Array.from(Array(height), () => new Array(width));
            for (let i = 0; i < height; i++) {
                for (let j = 0; j < width; j++) {
                    temp[i][j] = square[j][i];
                }
                temp[i].reverse();
            }
            square = [...temp]
            table_squares.push(square)
        }

    }
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (table[row][col] === 0 && !visited[row][col]) {
                let [[minX, minY], [maxX, maxY]] = dfs(table, row, col);
                let square = makeSquare(table, minX, minY, maxX, maxY)
                rotate(table, square);
            }
        }
    }
    visited = Array.from(Array(size), () => new Array(size).fill(false));
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (game_board[row][col] === 0 && !visited[row][col]) {
                let [[minX, minY], [maxX, maxY]] = dfs(game_board, row, col);
                let square = makeSquare(game_board, minX, minY, maxX, maxY)
                squares.push(square);
            }
        }
    }
    table_squares = makeString(table_squares)
    squares = makeString(squares)
    for (let i = 0; i < squares.length; i++) {

        for (let j = 0; j < table_squares.length; j++) {
            if (squares[i] === table_squares[j]) {
                table_squares.splice(j - Math.ceil(j % 4), 4);
                answer += squares[i].match(/0/g).length;
                break;
            }
        }
    }
    return answer;
}

// let square = [[1, 2, 3], [4, 5, 6]];
// console.log(square)
// const rotate = (square, count) => {
//     for (let k = 0; k < 4; k++) {
//         let width = square.length;
//         let height = square[0].length;
//         let temp = Array.from(Array(height), () => new Array(width));
//         for (let i = 0; i < height; i++) {
//             for (let j = 0; j < width; j++) {
//                 temp[i][j] = square[j][i];
//             }
//             temp[i].reverse();
//         }
//         square = [...temp]
//     }

//     return square;
// }
// square = rotate(square, 2)
// console.log(square)

let arr = [[0], [0]];
arr = arr.map(e => e.join('') + 'n')
console.log(arr)