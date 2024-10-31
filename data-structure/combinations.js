function getCombinations(arr, selectNumber) {
  const results = [];

  function combine(tempArr, start) {
    // 조합의 길이가 selectNumber에 도달했을 때 결과에 추가
    if (tempArr.length === selectNumber) {
      results.push(tempArr);
      return;
    }

    // 시작 인덱스부터 순차적으로 요소를 선택하여 조합 생성
    for (let i = start; i < arr.length; i++) {
      // 현재 요소 추가 후 다음 요소로 이동하여 재귀 호출
      combine([...tempArr, arr[i]], i + 1); // 선택된 요소 추가 후 다음 인덱스로 호출
    }
  }

  combine([], 0); // 빈 배열로 시작하여, 처음 인덱스 0부터 조합 시작
  return results;
}

// 예시 실행
const arr = [1, 2, 3];
console.log(getCombinations(arr, 2));

function getCombinationsByLoop(arr, selectNumber) {
  const results = [];

  const stack = [{ tempArr: [], start: 0 }];

  while (stack.length) {
    const { tempArr, start } = stack.pop();

    if (tempArr.length === selectNumber) {
      results.push(tempArr);
      continue;
    }

    for (let i = start; i < arr.length; i++) {
      stack.push({ tempArr: [...tempArr, arr[i]], start: i + 1 });
    }
  }

  return results;
}

console.log(getCombinationsByLoop(arr, 2));
