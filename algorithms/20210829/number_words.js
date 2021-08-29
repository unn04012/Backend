let s = "onezerozero";
solution2(s);
function solution(s) {
    var answer = '';
    let str = '';

    const keyTable = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };

    for (let i = 0; i < s.length; i++) {
        str = '';
        let num = 0;
        num = Number.parseInt(s[i], 10);
        if (Number.isInteger(num)) {
            answer += s[i];
            continue;
        };
        for (let j = i; j < s.length; j++) {
            str += s[j];
            if (keyTable[str] >= 0) {
                answer += keyTable[str];
                i = j;
                break;
            }
        }
    }
    return Number.parseInt(answer);
}


// let num = '4';
// num = Number.parseInt(num, 10);

// console.log(Number.isInteger(num));