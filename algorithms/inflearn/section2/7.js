let arr = [[5, 3, 7, 2, 3],
[3, 7, 1, 6, 1],
[7, 2, 5, 3, 4],
[4, 3, 6, 4, 1],
[8, 7, 3, 5, 2]];
console.log(solution(arr));
function solution(arr) {
    let answer;
    let delta = {
        'U': [-1, 0],
        'D': [1, 0],
        'L': [0, -1],
        'R': [0, 1]
    };
    let peaks = [];
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr.length; col++) {
            if (arr[row][col] === 0) continue;
            let flag = true;
            for (const [direct, value] of Object.entries(delta)) {
                let newRow = row + value[0]
                let newCol = col + value[1];
                if (newRow < 0 || newRow > arr.length - 1 || newCol < 0 || newCol > arr.length - 1) continue;
                if (arr[newRow][newCol] >= arr[row][col]) {
                    flag = false;
                    break;
                }
            }
            if (flag) peaks.push(arr[row][col])
        }
    }
    console.log(peaks)
    return peaks.length;
}