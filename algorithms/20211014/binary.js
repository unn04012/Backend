s = "110010101001";
s = "01110";
solution(s);
function solution(s) {
    var answer = [];
    let count = 0;
    let num = 0;
    while (s !== '1') {
        num += s.match(/0/g) ? s.match(/0/g).length : 0;
        s = s.replace(/0/g, '').length.toString(2);
        count++;
    }
    answer = [count, num];
    return answer;
}