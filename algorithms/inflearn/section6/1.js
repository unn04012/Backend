let a = "(()(()))(()";
a = '((()))'
console.log(solution(a));
function solution(brackets) {
    let stack = [];
    for (let bracket of brackets) {
        console.log(stack)
        if (bracket === ')') {
            if (stack[stack.length - 1] === '(') stack.pop();
            else return 'NO';
        }
        else stack.push(bracket);
    }
    return stack.length ? 'NO' : 'YES';
}