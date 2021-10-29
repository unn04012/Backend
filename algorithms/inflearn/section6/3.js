let a = [[0, 0, 0, 0, 0],
[0, 0, 1, 0, 3],
[0, 2, 5, 0, 1],
[4, 2, 4, 4, 2],
[3, 5, 1, 3, 1]];
let b = [1, 5, 3, 5, 1, 2, 1, 4];
a = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
b = [1, 5, 3, 5]

console.log(solution(a, b));
function solution(board, moves) {
    let answer = 0;
    let stack = [];
    const transpose = (board) => {
        let leng = board.length;
        for (let i = 0; i < leng; i++) {
            for (let j = 0; j < leng; j++) {
                if (j < i) {
                    let temp = board[i][j];
                    board[i][j] = board[j][i];
                    board[j][i] = temp;
                }
                // board[j][i] = 0;
            }
        }
    }
    transpose(board)
    board = board.map(e => e.reverse().filter(element => element !== 0));
    moves.forEach(move => {
        let animal = board[move - 1].pop()
        if (!animal) return;
        if (stack.length && stack[stack.length - 1] === animal) {
            stack.pop();
            answer += 2;
        } else
            stack.push(animal);
    })
    return answer;
}

function solution2(board, moves) {
    var answer = 0;
    let bucket = [];
    board = transpose(board);
    board = reverse(board);
    moves.forEach((move) => {
        let toyNumber = board[move - 1].pop();
        if ((toyNumber == 0) || !toyNumber) return;
        if ((bucket[bucket.length - 1] == toyNumber)) {
            bucket.pop();
            answer += 2;
            return;
        }


        bucket.push(toyNumber);
    })
    return answer;
}
const transpose = matrix => matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
);

const reverse = (matrix) => {
    let index;
    let reverse = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!(matrix[i][j] == 0)) {
                index = j;
                break;
            }

        }
        matrix[i] = [...matrix[i].slice(0, index), ...matrix[i].slice(index).reverse()];
    }
    return matrix;
}