# forEach

- forEach구문은 `continue` 구문을 사용할 수 없다.
- `return` 문을 사용하여 해당 값의 처리를 건너 뛰고, 배열의 다음 값을 처리한다.

# Math.max

- 배열의 최대값을 찾는 경우 spread syntax 사용
- ex) `Math.max(...arr)`

# Array.join()

- 배열의 원소들을 특정 구분자를 기준으로 합친다.
- 만약 원소마다 공백없이 이어붙일겨우 공백을 입력한다.
- ex) `arr.join('')`

# for ... of

- `forEach`는 배열만 사용가능
- for ... of 문은 반복가능한 객체 (Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)반복한다.

```jsx
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

# 정렬

- **문자열 비교**

```jsx
function solution(strings, n) {
    return strings.sort((a, b) => {
        const chr1 = a.charAt(n);
        const chr2 = b.charAt(n);

        if (chr1 == chr2) {
            return (a > b) - (a < b); // 오름차순 정렬
        } else {
            return (chr1 > chr2) - (chr1 < chr2); // 문자열의 특정 인덱스 오름차순
        }
    })
}
```

```jsx
const test = [
    { job: 'SI', score: 55 },
    { job: 'PORTAL', score: 55 },
    { job: 'CONTENTS', score: 53 },
    { job: 'GAME', score: 22 },
    { job: 'HARDWARE', score: 19 }
];

test.sort((a, b) => {
    if (a.score === b.score) {
        console.log((a.job > b.job));
        return (a.job > b.job) - (a.job < b.job);
    }
    return b.score - a.score;
})
```

- 문자열 관련 정렬을 할 경우 는 위와 같이 한다.
- 즉 sort 메서드의 a,b가 0보다 작을 경우 swap이 일어난다.
- `a.job > b.job`이 거짓일 경우 1, `a.job < b.job` 이 참일 경우 1이 되면서 -1인 음수가 되어서 swap이 실행된다.
- 매개변수 a,b 는 순서대로 2번째 원소, 1번째 원소가 된다. 즉, 다음 번 째의 원소가 1번째 매개변수로 오기 때문에 `a.job > b.job = 'PORTAL' > 'SI`'가 된다.  이 결과는 거짓이 되므로 0이 된다.

# Array.splice

- 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.

```jsx
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
```

# Array.slice

- 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
- 즉 slice는 자른 원소를 반환하고 splice는 자르고 남은 원소들을 반환한다.