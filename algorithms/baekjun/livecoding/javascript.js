const swap = (arr, left, right) => {
  [arr[left], arr[right]] = [arr[right], arr[left]];
};

const findPivot = (arr, left, right) => {
  const random = [];
  for (let i = 0; i < 2; i++)
    random.push(arr[Math.floor(Math.random() * (right - left)) + left]);

  return random.sort((a, b) => a - b)[1];
};
const partition = (arr, left, right) => {
  const pivot = findPivot(arr, left, right);
  while (left <= right) {
    // pivot을 기준으로 pivot보다 작을 경우 무시하고 클 경우 멈춤
    while (arr[left] < pivot) left++;
    // pivot을 기준으로 Pivot보다 클 경우 무시하고 작을 경우 멈춤
    while (arr[right] > pivot) right--;
    if (left <= right) {
      //찾은 값을 스왑
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  let pivotIndex = partition(arr, left, right); // 오른쪽 파티션의 첫 번째 값 반환
  if (left < pivotIndex - 1) quickSort(arr, left, pivotIndex - 1); // 기준 왼쪽 부분 재귀
  if (pivotIndex < right) quickSort(arr, pivotIndex, right); // 기준 오른쪽 부분 재귀
  return arr;
};
const arr = [8, 7, 9, 9, 6, 10, 39, 9, 5, 4, 3, 2, 1];
console.log(quickSort(arr));
