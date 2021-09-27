let phone_number = "01033334444";
solution(phone_number);

function solution(sizes) {
    var answer = 0;
    let lastNumber = sizes.substring(sizes.length - 4, sizes.length);
    let frontNumber = '';
    for (let i = 0; i < sizes.length - 4; i++) {
        frontNumber += '*';
    }
    return frontNumber + lastNumber;
}