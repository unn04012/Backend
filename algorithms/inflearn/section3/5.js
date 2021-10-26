
console.log(solution('KKHSSSSSSSEE'));
function solution(str) {
    let answer = '';
    let prev = ''
    let count = '';
    for (let i = 0; i < str.length; i++) {
        if (prev !== str[i]) {
            prev = str[i];
            if (count !== 1) answer += count;
            answer += str[i];
            count = 1;
        } else {
            count++;
        }

    }
    if (count !== 1) answer += count;
    return answer;
}