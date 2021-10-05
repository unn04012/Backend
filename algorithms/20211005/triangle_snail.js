let n = 5;
solution(n);
function solution(n) {
    var answer = [];
    let triangle = [];
    let count = 0;
    let idx = 1;
    for (let i = 1; i <= n; i++) {
        triangle[i - 1] = [];
        for (let j = 0; j < i; j++) {
            triangle[i - 1].push(true);
            count++;
        }
    }
    let row = 0, col = 0;
    for (let j = n; j > 0; j -= 3) {
        for (let i = 0; i < j; i++) {
            if (triangle[row][col]) {
                triangle[row++][col] = idx++;
            }

        }
        console.log(triangle)
        console.log(row, col)
        row--
        for (let i = 0; i < j - 1; i++) {
            triangle[row][++col] = idx++;
        }
        console.log(triangle)
        console.log(row, col)
        for (let i = j - 2; i > 0; i--) { // i = 3             
            triangle[--row][--col] = idx++;

        }
        console.log(triangle)
        console.log(row, col)

        row++;

    }
    for (let i = 0; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            answer.push(triangle[i][j])
        }
    }
    return answer;
}