
console.log(solution('gooG'));
function solution(str) {
    str = str.toLowerCase();
    let back = '';
    for (let i = str.length - 1; i >= 0; i--) {
        back += str[i];
    }
    return back === str ? 'YES' : 'NO';
}

