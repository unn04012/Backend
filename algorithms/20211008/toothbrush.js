let enroll = ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"];
let referral = ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"];
let seller = ["young", "john", "tod", "emily", "mary"];
let amount = [12, 4, 2, 5, 10];
//let result = [360, 958, 108, 0, 450, 18, 180, 1080]

solution(enroll, referral, seller, amount)

// function solution(enroll, referral, seller, amount) {
//     var answer = [];
//     let organ = {};
//     let benefit = [];
//     let flagObj = {}
//     seller.forEach((e, i) => {
//         benefit.push({ seller: e, money: amount[i] * 100, earn: 0 });
//         flagObj[e] = true;
//     })
//     enroll.forEach((e, i) => {
//         organ[e] = referral[i];
//     });
//     console.log(benefit, organ)
//     benefit.forEach(e => {
//         let money = e.money;
//         let seller = e.seller;
//         while (seller !== '-') {
//             let flag = false;
//             money = Math.floor(money * 0.1); // 10%프로
//             e.money -= money; // 돈 번놈 10% 차감
//             seller = organ[seller]; // 추천인으로 넘어감
//             for (let i = 0; i < benefit.length; i++) {
//                 if (benefit[i].seller === seller) flag = true;
//             }
//             if (!flag) benefit.push({ seller, money, earn: 0 })
//             else {
//                 // 여기서부터 추천인으로 감
//                 e.earn += money;
//             }
//         }
//     })
//     console.log(benefit)
//     // for (let seller in benefit) {
//     //     // let boss = key;    
//     //     flagObj[seller] = false;
//     //     let money = benefit[seller].money;
//     //     // benefit[seller].money -= Math.floor(money * 0.1); // 1원 미만 생각하기
//     //     while (seller !== '-') {
//     //         let prevMoney = money;
//     //         money = Math.floor(money * 0.1);
//     //         //console.log(seller, money, benefit)

//     //         if (money < 1) {
//     //             //benefit[seller].earn += prevMoney; // 1보다 작으면 현재 사람이 다 가진다.
//     //             seller = organ[seller];
//     //             if (!benefit[seller]) benefit[seller] = { money: 0, earn: 0 };
//     //             continue;
//     //         } else {

//     //             benefit[seller].earn -= money;
//     //             seller = organ[seller];
//     //             if (!benefit[seller]) benefit[seller] = { money: 0, earn: 0 };
//     //             benefit[seller].earn += money; // 다음사람의 분배금을 더한다.
//     //         }
//     //         //benefit[seller].earn += money; // 추천인 돈을 올린다.
//     //     }
//     // }
//     // console.log(organ, benefit)
//     // enroll.forEach(person => {
//     //     if (!benefit[person]) {
//     //         answer.push(0);
//     //         return;
//     //     }
//     //     answer.push(benefit[person].money + benefit[person].earn)
//     // })
//     // console.log(answer)
//     return answer;
// }

function solution(enroll, referral, seller, amount) {
    var answer = [];
    let organ = {};
    let visit = {};
    let sales = {}
    enroll.forEach((e, i) => {
        visit[e] = false;
        if (!organ[referral[i]]) organ[referral[i]] = [];
        if (!organ[e]) organ[e] = [];
        organ[referral[i]].push(e)
    });
    seller.forEach((e, i) => {
        if (!sales[e]) sales[e] = [];
        sales[e].push(amount[i] * 100)
    })
    let stack = [['-', null]];
    while (stack.length) {
        const [node, parent] = stack.pop();
        if (visit[node]) { // 부모 노드로 갈때           
            if (sales[node] && node !== '-') {
                for (let i = 0; i < sales[node].length; i++) {
                    if (sales[node][i] === 0) continue;
                    let money = Math.floor(sales[node][i] * 0.1); // 10%는 부모에게 전달                       
                    if (!sales[parent]) sales[parent] = [money];
                    else {
                        sales[parent].push(money);
                    }
                    sales[node][i] -= money;
                }

            }
            continue;
        }
        stack.push([node, parent])
        visit[node] = true;
        for (const next of organ[node]) {
            if (!visit[next]) stack.push([next, node]) // next 현재, node :  parent
        }
    }
    answer = enroll.map(e => {
        let sum = 0;
        if (!sales[e]) return 0;
        for (let i = 0; i < sales[e].length; i++) {
            sum += sales[e][i];
        }
        return sum;
    });

    console.log(answer)
    return answer;
}
let map = new Map();
map.set('a', [1, 2, 3]);
map.set(map.get('a').push(4))

console.log(map.get('a'))

