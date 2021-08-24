
let clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
// clothes = [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]];
console.log(solution(clothes));



function solution(clothes) {
    var answer = 1;
    let kindClothes = {};


    clothes.forEach((cloth) => {
        if (!kindClothes[cloth[1]]) kindClothes[cloth[1]] = [];
        kindClothes[cloth[1]].push(cloth[0]);
    });
    let keys = Object.keys(kindClothes);
    let values = Object.values(kindClothes);
    if (keys.length === 1) return values[0].length;
    else {
        for (let i = 0; i < keys.length; i++) {
            answer *= (values[i].length + 1)
        }
    }
    return answer - 1;
}


// var obj = { key1: ["val1", "val2", "val3"], key2: "value2" };
// console.log(obj);

