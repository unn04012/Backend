console.log(solution(5));
function solution(number) {
    let answer;
    const factorial = (n) => {
        if (n == 1) return 1;
        return n * factorial(n - 1);
    }
    answer = factorial(number);
    return answer;
}