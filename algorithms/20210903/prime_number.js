const { resourceLimits } = require("worker_threads");

let numbers = "ABC";
// solution(numbers);

function solution(numbers) {
    var answer = 0;
    let arr = numbers.split('').map(number => parseInt(number));
    let permutation = [];
    const is_prime = (num) => {
        if (num === 0 || num === 1) return false;

        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) count++
        }
        if (count === 2) return true;
    }

    const solve = (cnt, used, val) => {
        if (val !== 0) permutation.push(val);
        if (cnt >= numbers.length) return;
        for (let i = 0; i < arr.length; i++) {
            if ((used & 1 << i) !== 0) continue;
            solve(cnt + 1, used | 1 << i, val * 10 + arr[i]);
        }

    }
    solve(0, 0, 0);
    permutation = new Set(permutation);
    console.log(permutation)
    for (let num of permutation) {
        if (is_prime(num)) answer++
    }
    console.log(answer)
    return answer;
}
solution2(numbers)
function solution2(numbers) {
    var answer = 0;
    let arr = numbers.split('');
    let permutation = [];
    const is_prime = (num) => {
        if (num === 0 || num === 1) return false;

        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) count++
        }
        if (count === 2) return true;
    }

    const getPermutation = (arr, fixed) => {
        if (arr.length < 1) return;
        for (let i = 0; i < arr.length; i++) {
            const newFixed = fixed + arr[i];
            const copyArr = arr.slice();
            copyArr.splice(i, 1);
            permutation.push(newFixed);
            console.log('copyArr : ', copyArr, 'newFixed : ', newFixed, ' i : ', i)
            getPermutation(copyArr, newFixed);
        }
    }
    getPermutation(arr, '');
    console.log(permutation)
    permutation = new Set(permutation);
    // console.log(permutation)
    // for (let num of permutation) {
    //     if (is_prime(num)) answer++
    // }
    // console.log(answer)
    return answer;
}

// let set = [1, 2, 3, 4, 3];
// console.log(new Set(set))