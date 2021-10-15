let rows = 6;
let columns = 6;
let queries = [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]];
solution(rows, columns, queries)
function solution(rows, columns, queries) {
    var answer = [];
    let val = 1;
    let square = [];
    for (let i = 0; i < rows; i++) {
        if (!square[i]) square[i] = [];
        for (let j = 0; j < columns; j++) {
            square[i][j] = val++;
        }
    }
    console.log(square);
    queries.forEach((query, i) => {
        let value = 10001;
        // if (i >= 1) return;
        let [row1, col1, row2, col2] = query;
        let first = square[row1 - 1][col1 - 1];
        // up
        for (let i = row1 - 1; i < row2 - 1; i++) {
            square[i][col1 - 1] = square[i + 1][col1 - 1]
            if (square[i][col1 - 1] < value) value = square[i][col1 - 1]
        }
        // left
        for (let i = col1 - 1; i < col2 - 1; i++) {
            square[row2 - 1][i] = square[row2 - 1][i + 1]
            if (square[row2 - 1][i] < value) value = square[row2 - 1][i]
        }
        //down
        for (let i = row2 - 1; i > row1 - 1; i--) {
            square[i][col2 - 1] = square[i - 1][col2 - 1]
            if (square[i][col2 - 1] < value) value = square[i][col2 - 1]
        }
        //right
        for (let i = col2 - 1; i > col1 - 1; i--) {
            square[row1 - 1][i] = square[row1 - 1][i - 1]
            if (square[row1 - 1][i] < value) value = square[row1 - 1][i]
        }
        square[row1 - 1][col1] = first
        if (first < value) value = first;
        answer.push(value)
    })
    console.log(square)
    console.log(answer)
    return answer;
}