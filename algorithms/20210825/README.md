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