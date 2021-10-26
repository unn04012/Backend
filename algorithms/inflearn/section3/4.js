console.log(solution('teachermode', 'e'));
function solution(str, char) {
    let answer = [];
    let indexes = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) indexes.push(i);
    }
    for (let i = 0; i < str.length; i++) {
        let diff = str.length + 1;
        if (str[i] === char) {
            answer.push(0);
            continue;
        }
        indexes.forEach(e => {
            if (Math.abs(e - i) < diff) diff = Math.abs(e - i);
        })
        answer.push(diff)
    }
    console.log(indexes)
    return answer;
}