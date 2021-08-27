# BFS

- 2차원 배열을 이용하여 좌표를 사용할 경우에 사용할 수 있다.
- 카카오 인턴십 문제인 거리 두기 문제에서 BFS를 사용하여 구할 수 있다.

```jsx
let Delta = {
        up: [-1, 0],
        down: [1, 0],
        left: [0, -1],
        right: [0, 1],
};
```

- 위 코드와 같이 상하자우의 좌표를 설정을 해 주위에 값들을 확인 할 수 있다.

```jsx
for (const [key, value] of Object.entries(Delta)) {
  **let newRow = node.row + value[0];**
  **let newCol = node.col + value[1];**
	 ...
  if (visited[newRow][newCol]) continue;

  visited[newRow][newCol] = true;
  needVisit.push({ row: newRow, col: newCol, dist: node.dist + 1 });
}
```

- 위 코드와 같이 해당 Delta 객체를 순회를 해서 상하좌우로 움직일 수 있다.
- 움직인 좌표를 enqueue를 한다음 다음 반복문에서 해당 좌표값을 dequeue 하면서 다시 newRow와 newCol값을 재정의해서 다음 좌표의 상하좌우를 순회할 수 있다.