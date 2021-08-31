
let cacheSize = 4;
let cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
console.log(solution(cacheSize, cities));

function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];

    if (cacheSize == 0) return cities.length * 5;
    cities.forEach(city => {
        city = city.toUpperCase();
        if (cache.includes(city)) {
            let index = cache.indexOf(city);
            cache.splice(index, 1);
            cache.push(city);
            answer += 1
        } // cache가 가지고 있을 때
        else {
            if (cache.length < cacheSize) {
                if (cache.includes(city)) {
                    answer += 1;
                } else {
                    cache.push(city);
                    answer += 5;
                }

            } else {
                cache.shift();
                cache.push(city);
                answer += 5;
            }
        };
    });
    console.log(answer);
    return answer;
}



