const factorical = (n) => {
    if (n === 1 || n === 0) return 1;
    return n * factorical(n - 1);
}

const combinations = (total, count) => {
    return factorical(total) / (factorical(total - count) * factorical(count))
}

// console.log(combinations(2, 2));

// solution(s);
let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let s = "onezerozero";
let arr = s.split('zero');
let answer;
console.log(s.split('zero'));
answer = arr.join(0);
console.log(answer)

// console.log(s.split(''));
// console.log(s.split(numbers[0]))
// let arr = s.split(numbers[0]);
// let answer = arr.join(0)
// console.log(answer);