let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];
lottos = [0, 0, 0, 0, 0, 0];
win_nums = [38, 19, 20, 40, 15, 25];
lottos = [45, 4, 35, 20, 3, 9];
win_nums = [20, 9, 3, 45, 4, 35];
solution(lottos, win_nums);

function solution(lottos, win_nums) {
    var answer = [];
    let count = 0;
    let zeroCount = 0;
    let rank;
    const getRank = (count) => {
        switch (count) {
            case 2:
                rank = 5;
                break;
            case 3:
                rank = 4;
                break;
            case 4:
                rank = 3;
                break;
            case 5:
                rank = 2;
                break;
            case 6:
                rank = 1;
                break;
            default:
                rank = 6;
        }
        return rank;
    }
    lottos.forEach(num => {
        if (num === 0) {
            zeroCount++;
            return;
        }
        if (win_nums.includes(num)) count++;
    });
    answer = [getRank(count + zeroCount), getRank(count)]

    console.log(answer)
}