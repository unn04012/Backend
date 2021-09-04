let rows = 6;
let columns = 6;
queries = [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]];
solution(rows, columns, queries);
function solution(rows, columns, queries) {
    var answer = [];
    const makeRect = (rows, columns) => {
        let count = 1;
        let rect = Array.from(Array(rows), () => new Array(columns));
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                rect[i][j] = count++;
            }
        }
        return rect;
    }

    const rotate = (rect, rotate) => {
        const [row1, col1, row2, col2] = rotate; // [2,2,5,4]
        let tmp = rect[row1 - 1][col1 - 1];
        let smallest = tmp;
        //left
        for (let i = row1 - 1; i < row2 - 1; i++) {
            rect[i][col1 - 1] = rect[i + 1][col1 - 1];
            smallest = Math.min(smallest, rect[i + 1][col1 - 1])
        }
        //bottom
        for (let i = col1 - 1; i < col2 - 1; i++) {
            rect[row2 - 1][i] = rect[row2 - 1][i + 1];
            smallest = Math.min(smallest, rect[row2 - 1][i + 1])
        }
        //right
        for (let i = row2 - 1; i > row1 - 1; i--) {
            rect[i][col2 - 1] = rect[i - 1][col2 - 1];
            smallest = Math.min(smallest, rect[i - 1][col2 - 1])
        }
        //top
        for (let i = col2 - 1; i > col1 - 1; i--) {
            rect[row1 - 1][i] = rect[row1 - 1][i - 1];
            smallest = Math.min(smallest, rect[row1 - 1][i - 1])
        }

        rect[row1 - 1][col1] = tmp;

        return { rect, smallest };
    }

    let rectangle = makeRect(rows, columns);

    queries.forEach((query, index) => {
        let result = rotate(rectangle, query);
        rectangle = result.rect;
        answer.push(result.smallest);
    });
    return answer;
}

// let arr = [1, 2, 3];
// let tmp = arr[2];


// console.log(arr);