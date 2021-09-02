let orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"]
let course = [2, 3, 4];
solution(orders, course);


function solution(orders, course) {
    var answer = [];
    let maxCount = {};
    let foodMaps = {};


    const recursive = (str, pos, candi) => {
        candi = candi.split('').sort().join('');
        if (pos >= str.length) {
            if (candi.length >= 2) {
                if (!foodMaps[candi.length]) foodMaps[candi.length] = maxCount[candi.length] = {};
                if (!foodMaps[candi.length][candi]) {
                    foodMaps[candi.length][candi] = 1;
                } else {
                    foodMaps[candi.length][candi]++;
                }
                maxCount[candi.length] = maxCount[candi.length] >= foodMaps[candi.length][candi] ? maxCount[candi.length] : foodMaps[candi.length][candi];

            }
            return;
        }
        recursive(str, pos + 1, candi += str[pos]);
        candi = candi.substring(0, candi.length - 1);
        recursive(str, pos + 1, candi);
    }
    orders.forEach(order => {
        recursive(order, 0, '');
    })

    course.forEach(count => {
        for (const menu in foodMaps[count]) {
            if (foodMaps[count][menu] !== 1 && foodMaps[count][menu] === maxCount[count]) answer.push(menu)
        }
    })

    return answer.sort();
}


// let str = "ACD";

// function recursive(str, pos, candi) {
//     console.log('start : ', candi, " pos : ", pos)
//     if (pos >= str.length) {
//         return;
//     }
//     recursive(str, pos + 1, candi += str[pos]);
//     candi = candi.substring(0, candi.length - 1);
//     recursive(str, pos + 1, candi);
//     console.log('end')
// }

// recursive(str, 0, '')

let foodMaps = {

}
foodMaps['2']['AC'] = 2;
console.log(foodMaps);

