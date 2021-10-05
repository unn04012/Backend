let files = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"];
files = ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"];
solution(files);
function solution(files) {
    var answer = [];
    let fileName = [];
    files.forEach((file, index) => {
        let head = '', number = '', tail = '';
        let headIndex
        //number
        for (let i = 0; i < file.length; i++) {
            if (!file[i].match(/[^0-9]/)) {
                headIndex = i;
                break
            };
            head += file[i];
        }
        for (let i = headIndex; i < file.length; i++) {
            if (number.length >= 5 || !file[i].match(/[0-9]/)) {
                for (let j = i; j < file.length; j++) {
                    tail += file[j];
                }
                break;
            }
            number += file[i];
        }
        fileName.push({ head, number, tail, order: index })
    });

    fileName.sort((a, b) => {
        if (a.head.toLowerCase() === b.head.toLowerCase()) {
            if (Number(a.number) === Number(b.number)) {
                return a.order - b.order;
            }
            return Number(a.number) - Number(b.number);
        }
        if (a.head.toLowerCase() < b.head.toLowerCase()) return -1;
    });
    answer = fileName.map(file => file.head + file.number + file.tail);
    console.log(answer)
    return answer;
}
// let a = Number(014);
// let b = Number(13);
// console.log(a < b)
console.log(Number('012'))