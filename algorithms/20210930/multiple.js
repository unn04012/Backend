let arr = [2, 6, 8, 14];
// arr = [1, 2, 3]
// arr = [6, 2, 4]
// arr = [10, 15]
// arr = [10, 50, 100]
console.log(solution(arr));
function solution(arr) {
    var answer = 1;

    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, (a % b));
    }

    const lcm = (a, b) => {
        return a * b / gcd(a, b)
    }
    arr.forEach(element => {
        answer = lcm(answer, element);
    });

    return answer;
}

// const gcd = (a, b) => {
//     if (b === 0) return a;
//     return gcd(b, (a % b));
// }

// let result = gcd(1071, 1029)
// console.log(result)