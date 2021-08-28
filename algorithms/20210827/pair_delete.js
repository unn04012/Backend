let s = 'baabaa';
s = 'abaabaaa'
// s = 'cdcd'
// console.log(solution(s));
console.log(solution2(s));
function solution(s) {
    let str = '';
    let i = 0;
    do {
        console.log(s);
        str = s;
        s = '';
        if (i !== str.length - 1 && str[i] === str[i + 1]) {
            console.log('hell')
            i += 2;
            continue;
        }
        s += str[i];
        if (str.length > 0 && s === str) return 0;
        i++;
    } while (str.length > 0);
    return 1;
}

function solution2(s) {
    let str = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === str[str.length - 1]) str.pop();
        else str.push(s[i]);
    }
    // while (str.length > 0 && i < str.length - 1) {
    //     if (str[i] === str[i + 1]) {
    //         str.splice(i, 2);
    //         i = 0;
    //         continue;
    //     }
    //     i++;
    // }
    // answer = str.length === 0 ? 1 : 0;
    return str.length === 0 ? 1 : 0;
}

