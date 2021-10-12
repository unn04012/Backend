let s = "(())()";
solution(s);
function solution(s) {
    var answer = true;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        console.log(stack)
        if (s[i] === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
                continue;
            }
            else {
                answer = false;
            }
        }
        stack.push(s[i]);
    }
    if (stack.length) answer = false;
    console.log(answer)
    return answer;
}