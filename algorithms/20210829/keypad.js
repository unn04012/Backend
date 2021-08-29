const { BADFLAGS } = require("dns");

let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right";
numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
hand = "left";
solution(numbers, hand);
/**
 * 
 * @param {*} numbers 
 * @param {*} hand 
 * @returns 
 * 1,4,7 : 왼손
 * 3,6,9 : 오른손
 * 2,5,8,0 더 가까운 손
 */
function solution(numbers, hand) {
    var answer = '';
    let leftHand = [1, 4, 7];
    let rightHand = [3, 6, 9];
    let lastLeftHand = '*';
    let lastRightHand = '#';
    let phone = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['*', 0, '#'],
    ];

    const distance = (location, hand) => {
        let leftLocation = Math.abs(location.left[0] - location.number[0]) + Math.abs(location.left[1] - location.number[1]);
        let rightLocation = Math.abs(location.right[0] - location.number[0]) + Math.abs(location.right[1] - location.number[1]);
        if (leftLocation > rightLocation) return 'R';
        else if (leftLocation < rightLocation) return 'L';
        else {
            return hand === "right" ? 'R' : 'L';
        }
    }

    const check = (lastLeftHand, lastRightHand, number, hand) => {
        let location = {};
        let result = {};
        for (let row = 0; row < phone.length; row++) {
            for (let col = 0; col < phone[row].length; col++) {
                if (phone[row][col] === lastLeftHand) location.left = [row, col];
                if (phone[row][col] === lastRightHand) location.right = [row, col];
                if (phone[row][col] === number) location.number = [row, col];
            }
        }
        let direction = distance(location, hand);
        if (direction === 'L') {
            result.lastLeftHand = number;
            result.lastRightHand = lastRightHand;
        } else {
            result.lastLeftHand = lastLeftHand;
            result.lastRightHand = number;
        }
        result.hand = direction;

        return result;
    };


    numbers.forEach((number, index) => {
        if (leftHand.includes(number)) {
            answer += 'L'
            lastLeftHand = number;
            return;
        };
        if (rightHand.includes(number)) {
            answer += 'R'
            lastRightHand = number;
            return;
        };
        let result = check(lastLeftHand, lastRightHand, number, hand);

        lastLeftHand = result.lastLeftHand;
        lastRightHand = result.lastRightHand;
        answer += result.hand;

    });

    return answer;
}