let str = 'found7, time: study; Yduts; emit, 7Dnuof'
console.log(solution(str));
function solution(str) {
    let answer;
    str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let back = ''
    for (let i = str.length - 1; i >= 0; i--) {
        back += str[i];
    }

    return back === str ? 'YES' : 'NO';
}