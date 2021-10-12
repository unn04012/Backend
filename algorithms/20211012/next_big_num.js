let n = 15;
solution(n);
function solution(n) {
    var answer = 0;

    let oneCount = n.toString(2).match(/1/g).length;
    for (let i = n + 1; ; i++) {
        let count = i.toString(2).match(/1/g).length
        if (oneCount === count) {
            answer = i;
            break;
        }
    }
    console.log(answer)
    return answer;
}