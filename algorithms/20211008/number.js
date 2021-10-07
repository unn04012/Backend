solution(15)
function solution(n) {
    var answer = 0;
    let num = 1;
    while (num <= n) {
        let sum = 0;
        for (let i = num; i <= n; i++) {
            sum += i;
            console.log(sum)
            if (sum > n) break;
            if (sum === n) {
                answer++;
                break;
            }
        }
        num++;
    }
    console.log(answer)
    return answer;
}