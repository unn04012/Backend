console.log(solution(8, 12));
function solution(w, h) {
    var answer = 1;
    const gcd = (w, h) => {
        let divideW = [];
        let max = 0;
        for (let i = 1; i <= w; i++) {
            if (w % i === 0) divideW.push(i)
        }
        divideW.forEach(e => {
            if (h % e === 0) max = Math.max(max, e);
        });
        return max;
    }
    answer = w + h - gcd(w, h);
    return w * h - answer;
}