let maps = [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]];
solution(maps);
function solution(maps) {
    var answer = -1;
    let delta = {
        up: [-1, 0],
        down: [1, 0],
        left: [0, -1],
        right: [0, 1],
    }
    let rowLength = maps.length;
    let colLength = maps[0].length;
    console.log(width, height)
    const visited = Array.from(new Array(rowLength), () => new Array(colLength).fill(false));
    let queue = [{ row: 0, col: 0, dist: 1 }];
    visited[0][0] = true;
    while (queue.length) {
        let node = queue.shift();
        if (node.row === width - 1 && node.col === height - 1) {
            return node.dist;
        };
        //visited[x][y] = true;

        for (const [key, value] of Object.entries(delta)) {
            let newRow = node.row + value[0];
            let newCol = node.col + value[1];
            //console.log(newX, newY)
            if (newRow < 0 || newRow > rowLength - 1 || newCol < 0 || newCol > colLength - 1) continue;
            if (maps[newRow][newCol] === 0) continue;
            if (!visited[newRow][newCol]) {
                visited[newRow][newCol] = true;
                queue.push({ row: newRow, col: newCol, dist: node.dist + 1 })
            }

        }
    }
    return answer;
}

function solution2(maps) {
    var answer = -1;
    let Delta = {
        up: [-1, 0],
        down: [1, 0],
        left: [0, -1],
        right: [0, 1],
    };
    let end = { row: maps.length - 1, col: maps[0].length - 1 };
    let rowLength = maps.length;
    let colLength = maps[0].length;
    let visited = Array.from(Array(rowLength), () => new Array(colLength).fill(false));
    let needVisit = [];
    visited[0][0] = true;
    needVisit.push({ row: 0, col: 0, dist: 0 });
    while (needVisit.length !== 0) {
        const node = needVisit.shift();
        if (node.row === end.row && node.col === end.col) return node.dist + 1;

        for (const [key, value] of Object.entries(Delta)) {
            let newRow = node.row + value[0];
            let newCol = node.col + value[1];
            if (newRow < 0 || newRow > rowLength - 1 || newCol < 0 || newCol > colLength - 1) continue;
            if (maps[newRow][newCol] === 0) continue;
            if (visited[newRow][newCol]) continue;
            visited[newRow][newCol] = true;

            needVisit.push({ row: newRow, col: newCol, dist: node.dist + 1 });
        }

    }
    return answer;
}