let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
function solution(str) {
    let stack = [];
    for (let bracket of str) {
        if (bracket === ')') {
            while (true) {
                if (stack.pop() === '(') break;
            }
        } else {
            stack.push(bracket);
        }

    }
    return stack.join('');
}