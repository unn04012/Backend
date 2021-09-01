let s = "3people unFollowed me";
solution(s);

function solution(s) {
    var answer = '';
    const regexp = new RegExp(/[a-zA-Z]/)

    let arr = s.split(' ');
    arr.forEach((element, index) => {
        let str = '';
        for (let i = 0; i < element.length; i++) {
            if (i === 0) {
                if (regexp.test(element[0])) str += element[0].toUpperCase();
                else str += element[i];
            } else {
                if (regexp.test(element[i])) str += element[i].toLowerCase();
                else str += element[i];
            }

        }
        arr[index] = str;
    });

    answer = arr.join(' ')
    return answer;
}