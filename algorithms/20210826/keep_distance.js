let places = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]];
//solution(places);

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
solution2(places);

function solution2(places) {
    let answer = [];

    let Delta = {
        up: [-1, 0],
        down: [1, 0],
        left: [0, -1],
        right: [0, 1],
    };

    const bfs = (place, row, col) => {
        console.log('row and col is ', row, col)
        let visited = Array.from(Array(5), () => new Array(5).fill(false));
        let needVisit = [];
        visited[row][col] = true; // true로 변경        

        needVisit.push({ row, col, dist: 0 }); // 0은 distance
        while (needVisit.length !== 0) {
            const node = needVisit.shift(); // 받은 위치
            if (node.dist > 2) continue;
            if (node.dist !== 0 && place[node.row][node.col] === 'P') return false;
            for (const [key, value] of Object.entries(Delta)) {
                let newRow = node.row + value[0];
                let newCol = node.col + value[1];
                if (newRow < 0 || newRow > 4 || newCol < 0 || newCol > 4) continue;
                console.log(newRow, newCol);
                console.log(place[newRow][newCol]);
                if (place[newRow][newCol] === 'X') continue;
                if (visited[newRow][newCol]) continue;

                visited[newRow][newCol] = true;
                needVisit.push({ row: newRow, col: newCol, dist: node.dist + 1 });
            }
            console.log('----')
            console.log(visited)
            // if(!visited.)
            // for (let i = 0; i < nodeVisit,)
        }
        console.log('end-------------')
        return true;
    }

    const check = (place) => {
        for (let row = 0; row < place.length; row++) {
            for (let col = 0; col < place.length; col++) {
                if (place[row][col] === 'P') {
                    if (!bfs(place, row, col)) return false;
                }
            }
        }
        return true;
    }

    places.forEach((place, index) => {
        if (index >= 1) return;
        check(place) ? answer.push(1) : answer.push(0);
    })
    console.log(answer);

}

// let test = {
//     name: 'mun',
//     age: 12,
// };

// for (const [key, value] of Object.entries(test)) {
//     // if (key === 'name') continue;
//     console.log(key, value)
// }