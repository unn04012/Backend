let places = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]];
solution(places);

function solution(places) {
    var answer = [];

    const Manhattan = (position) => {
        let result = [];
        for (let i = 0; i < position.length; i++) {
            let location = position[i];
            for (let j = i + 1; j < position.length; j++) {
                let nextLocation = position[j];
                if ((Math.abs(location[0] - nextLocation[0]) + Math.abs(location[1] - nextLocation[1])) <= 2) {
                    result.push({ p: location, nextP: nextLocation })
                }
            }
        }
        return result;
    }
    places.forEach((place, index) => {
        let position = [];
        let flag = 1;
        // if (index >= 3) return;
        place.forEach((seats, x) => {
            for (let y = 0; y < seats.length; y++) {
                if (seats[y] === 'P') position.push([x, y]);
            }
        });

        let inManhattan = Manhattan(position);
        inManhattan.forEach((element, index) => {
            if (element.p[0] === element.nextP[0]) {
                if (place[element.p[0]][element.nextP[1] - 1] !== 'X') {
                    flag = 0;
                    return;
                };
            } else {
                if (element.p[1] === element.nextP[1]) {
                    if (place[element.nextP[0] - 1][element.p[1]] !== 'X') {
                        flag = 0;
                        return;
                    };
                    // console.log(flag);
                } else {
                    let x, y;
                    if (element.p[1] > element.nextP[1]) {
                        x = place[element.p[0]][element.p[1] - 1];
                    } else {
                        x = place[element.p[0]][element.p[1] + 1];
                    }
                    y = place[element.p[0] + 1][element.p[1]];
                    if (x !== 'X' || y !== 'X') {
                        flag = 0;
                        return;
                    };
                }

            }
        });
        answer.push(flag);
    })
    return answer;
}