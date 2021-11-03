console.log(solution(3));
function solution(N) {
    let answer = [];
    const toN = (number) => {
        if (number > N) return;
        answer.push(number++);
        toN(number)
    }
    toN(1)
    return answer;
}