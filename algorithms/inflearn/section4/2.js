console.log(solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));
function solution(count, nums) {
    let answer = [];
    const is_prime = (num) => {
        if (num === 2) return true;
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) count++;
        }
        return count === 2 ? true : false;
    }
    nums.forEach(num => {
        num = (num + '').split('').reverse().join('');

        if (is_prime(num)) answer.push(Number(num))
    })
    return answer;
}