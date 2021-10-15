let s = "{{2},{2,1},{2,1,3},{2,1,3,4}}" // 2,1,3,4
// s = "{{1,2,3},{2,1},{1,2,4,3},{2}}" // 2,1,3,4
//[2, 1, 3, 4]
s = "{{20,111},{111}}"; // 111, 20
// s = "{{123}}" // 123
// s = "{{4,2,3},{3},{2,3,4,1},{2,3}}" // 3,2,4,1
console.log(solution(s))
function solution(s) {
    var answer = [];
    let tuple = [];
    console.log(s.substring(1, s.length - 1).split('},{'))
    s = s.substring(1, s.length - 1).split('},{').map(e => e.replace(/{|}/g, ''));
    console.log(s)
    s.forEach(e => e.split(','))
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split(',')
    }
    console.log(s)
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            s[i][j] = s[i][j] * 1
        }
    }
    console.log(s)
    // for(let i =0; i < s.length; i++)
    if (s.length === 1) return s[0];
    s.sort((a, b) => a.length - b.length);
    // let firstElement = s[0][0];
    // answer.push(firstElement);
    s.forEach(e => {
        answer.push(e.filter(element => !answer.includes(element))[0]);

    })
    // console.log(answer)
    return answer;
}
