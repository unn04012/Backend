let brown = 24;
let yellow = 24;
console.log(solution(brown, yellow));

function solution(brown, yellow) {
    var answer = [];
    let divisor = [];

    const countYellow = (width, length) => {
        return (width - 2) * (length - 2);
    };

    if (Number.isInteger(Math.sqrt(brown + yellow))) {
        let sqrt = Math.sqrt(brown + yellow)
        // let countYellow = countYellow(sqrt, sqrt);
        if (countYellow(sqrt, sqrt) === yellow) return [sqrt, sqrt];
    }

    const getDivisor = (brown, yellow) => {
        let total = brown + yellow;
        for (let i = 3; i <= total; i++) {
            if (total % i === 0) {
                divisor.push(i);
            }
        }
    };

    const search = (cnt, used, val) => {
        console.log(val[0], val[1])
        if (val[0] > val[1]) console.log(val[0], val[1])
        if (cnt >= divisor.length) return;
        for (let i = 0; i < divisor.length; i++) {
            if ((used & 1 << i) !== 0) continue;
            search(cnt + 1, used | 1 << i, [val[0], divisor[i]]);
        }
    }
    getDivisor(brown, yellow);

    for (let i = 0; i < divisor.length; i++) {
        let width = divisor[i];
        for (let j = 0; j < divisor.length; j++) {
            if (i === j) continue;
            let length = divisor[j];
            if (width > length) {
                if (countYellow(width, length) === yellow) answer.push(width, length)
            }
        }
    }
    // search(0, 0, [divisor[0], divisor[1]]);    
    return answer;
}

