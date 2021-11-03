console.log(solution(11));
function solution(n) {
    let answer;
    let str = '';
    const recursive = (n) => {
        if (n === 0) return;
        recursive(Math.floor(n / 2));
        str += n % 2;
    }
    recursive(n)
    return Number(str);
}