let arr1 = [[1, 4], [3, 2], [4, 1]];
let arr2 = [[3, 3], [3, 3]];
arr1 = [[2, 3, 2], [4, 2, 4], [3, 1, 4]];
arr2 = [[5, 4, 3], [2, 4, 1], [3, 1, 1]];

//solution(arr1, arr2);
function solution(arr1, arr2) {
    var answer = [];
    arr2 = arr2.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );
    for (let row = 0; row < arr1.length; row++) {
        // arr1[row]  = [2,3,2]
        let temp = [];
        let sum = 0;
        for (let col = 0; col < arr2.length; col++) {
            sum = 0;
            for (let i = 0; i < arr2[col].length; i++) {
                sum += arr1[row][i] * arr2[col][i]
                // console.log(arr1[row][i], arr2[col][i], sum)
            }
            temp.push(sum)
        }
        answer.push(temp)
    }
    return answer;
}

for (let i = 0; i < arr2.length; i++) {
    for (let j = i; j < arr2[i].length; j++) {
        let temp = arr2[i][j];
        arr2[i][j] = arr2[j][i]
        arr2[j][i] = temp;
    }
}
console.log(arr2)