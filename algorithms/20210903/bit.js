let data = [1, 2, 3, 4]

// for (let i = 0; i < (1 << data.length); i++) {
//     console.log('{')
//     for (let j = 0; j < data.length; j++) {
//         if ((i & 1 << j) !== 0) {
//             console.log(data[j])
//         }
//     }
//     console.log('}')
// }


function solve(cnt, used, val) {
    console.log(val)
    console.log('used : ', used)
    if (cnt === 2) { console.log('val : ', val); return val };

    let ret = 0;
    for (let i = 0; i < data.length; i++) {
        console.log('value is : ', used & 1 << i, ' i is : ', i)
        if ((used & 1 << i) !== 0) { continue };
        ret = Math.max(ret, solve(cnt + 1, used | 1 << i, val * 10 + data[i]))
    }
}
// solve(0, 0, 0)

data = [1, 2, 3];
let arr = [];
function solve2(cnt, used, val) {
    console.log(val);
    if (val > 0) arr.push(val);
    if (cnt === 3) return;
    let ret = 0;
    for (let i = 0; i < data.length; i++) {
        console.log('used : ', used | 1 << i, 'i : ', i)
        if ((used & 1 << i) !== 0) continue;
        ret = Math.max(ret, solve2(cnt + 1, used | 1 << i, val * 10 + data[i]))
    }

    return arr;
}

arr = solve2(0, 0, 0)
console.log(arr)
