let s = "1 2 3 4";
solution(s)
function solution(s) {
    var answer = '';
    s = s.split(' ').map(e => Number(e)).sort((a, b) => a - b);

    return s[0] + ' ' + s[s.length - 1];
}