
console.log(solution(6, 5, 3))
function solution(a, b, c) {
    let min = 101;
    let arr = [a, b, c];
    arr.forEach(e => {
        if (min > e) min = e;
    })
    return min;
}