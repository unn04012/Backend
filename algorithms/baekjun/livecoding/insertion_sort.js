const insertion_sort = (arr) => {
  let i, j;
  for (i = 1; i < arr.length; i++) {
    const key = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key; // 오른쪽으로 이동
  }
};

const arr = [8, 5, 6, 2, 4];
insertion_sort(arr);
console.log(arr);
