function getPermutations(arr) {
  const results = [];

  function permute(tempArr, remainingArr) {
    // 기본 종료 조건: remainingArr가 비었을 때, 완성된 tempArr을 results에 추가
    if (remainingArr.length === 0) {
      results.push(tempArr); // 완성된 하나의 순열이므로 결과 배열에 추가
      return;
    }

    // remainingArr의 각 요소를 순서대로 선택하여 재귀 호출
    for (let i = 0; i < remainingArr.length; i++) {
      // tempArr에 현재 요소 추가, remainingArr에서 선택한 요소 제외 후 재귀 호출
      permute(
        [...tempArr, remainingArr[i]], // 현재 요소 추가된 배열로 업데이트
        [...remainingArr.slice(0, i), ...remainingArr.slice(i + 1)] // 현재 요소를 제외한 배열로 업데이트
      );
    }
  }

  permute([], arr); // 빈 배열을 시작 배열로 하여, 재귀 호출 시작
  return results;
}

// 예시 실행
const arr = [1, 2, 3];
console.log(getPermutations(arr));

function permutationWithIterate(arr) {
  const results = [];

  const stack = [{ tempArr: [], remainingArr: arr }];
  while (stack.length) {
    const { tempArr, remainingArr } = stack.pop();

    if (remainingArr.length === 0) {
      results.push(tempArr);
      continue;
    }

    for (let i = 0; i < remainingArr.length; i++) {
      stack.push({ tempArr: [...tempArr, remainingArr[i]], remainingArr: [...remainingArr.slice(0, i), ...remainingArr.slice(i + 1)] });
    }
  }

  return results;
}

console.log(permutationWithIterate(arr));
