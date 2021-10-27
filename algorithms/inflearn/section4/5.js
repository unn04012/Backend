let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
function solution() {
    let answer;
    let sums = new Set();
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (i === j) continue;
            sum += arr[j]
            for (let k = j + 1; k < arr.length; k++) {
                if (j === k || k === i) continue;
                sum += arr[k];
                sums.add(sum)
                sum -= arr[k];
            }
            sum -= arr[j]
        }
    }
    console.log(sums)
    let sumArr = [...sums].sort((a, b) => b - a);
    answer = sumArr[2];
    return answer;
}