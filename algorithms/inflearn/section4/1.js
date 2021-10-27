
console.log(solution(7, [128, 460, 603, 40, 521, 137, 123]));
function solution(count, nums) {
    let answer;
    let num = { sum: 0, val: 0 };
    nums.forEach(e => {
        let sum = 0;
        let temp = e;
        while (e > 0) {
            sum += e % 10;
            e = Math.floor(e / 10);
        }
        if (sum === num.sum && temp > num.val) num.val = temp;
        if (sum > num.sum) {
            num.val = temp;
            num.sum = sum;
        }
    })
    answer = num.val
    return answer;
}