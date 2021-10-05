let s = "try hello world";
solution(s);
function solution(s) {
    let arr = s.split(' ').map(e => {
        let result = '';
        for (let i = 0; i < e.length; i++) {
            result += i % 2 === 0 ? e[i].toUpperCase() : e[i].toLowerCase()

        }
        return result;
    })


    return arr.join(' ');
}