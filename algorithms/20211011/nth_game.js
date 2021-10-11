let n = 2, t = 4, m = 2, p = 1;
n = 16, t = 16, m = 2, p = 2
solution(n, t, m, p);
/**
 * 
 * @param {*} n 진법
 * @param {*} t t개
 * @param {*} m 참가인원
 * @param {*} p 순서
 * @returns 
 */
function solution(n, t, m, p) {
    var answer = '';
    let str = ''
    for (let i = 0; ; i++) {
        let flag = false;
        let num = i.toString(n).toUpperCase();
        for (let j = 0; j < num.length; j++) {
            str += num[j]
        }
        console.log('str', str, str.length)

        if (str.length >= (p - 1 + m) * t) {
            for (let j = 0; j < str.length; j++) {
                console.log(answer, p)
                if (answer.length === t) {
                    flag = true;
                    break;
                }
                answer += str[p - 1];
                p += m;
            }
        }
        if (flag) break;
    }
    console.log(answer)

    return answer;
}
let A = 15;
console.log(A.toString(16))