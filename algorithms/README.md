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

# Array.slice

- 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
- 즉 slice는 자른 원소를 반환하고 splice는 자르고 남은 원소들을 반환한다.

```jsx
var arr1 = [1, 2, 3, 4]; 
var arr2 = arr1.slice(); 
console.log("arr1: ", arr1); 
console.log("arr2: ", arr2); 
arr2[0] = 0; 
console.log("arr1: ", arr1); 
console.log("arr2: ", arr2); 
console.log(arr1 === arr2);

// arr1:  [ 1, 2, 3, 4 ]
// arr2:  [ 1, 2, 3, 4 ]
// arr1:  [ 1, 2, 3, 4 ]
// arr2:  [ 0, 2, 3, 4 ]
// false

출처: https://bbaktaeho-95.tistory.com/37 [Bbaktaeho]
```

- 위와 같이 깊은 복사가 되는 것을 알 수 있다
- 하지만 오브젝트 배열은 깊은 복사가 되지 않는다

# String.split([separator[, limit]])

- 특정 구분자를 기준으로 배열로 반환한다.
- `return value` : `Array`

```jsx
let s = "onezerozero";
let arr = s.split('one');
console.log(arr); // [ '', 'zerozero' ]
console.log(s.split('zero')); // [ 'one', '', '' ]
```

- 구분자가 one 이므로 해당 문자열을 기준으로 배열로 반환한다. 그래서 배열 길이는 2가 되면서
- 만약 zero를 구분자로 split 할 경우 배열 길이는 3이 되면서 'one 을 제외한 원소는 빈 배열이 생성된다.

## Split

- split 메서드를 이용하여 변수를 좀 더 간단하게 나타낼 수 있다.

```jsx
let str = 'Leave uid1234 Prodo';
const [state, id, nick] = str.split(' ');

console.log(state, id, nick) // Leave uid1234 Prodo
```

# Array.join([separator])

- 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
- `return value` : `String`
- `sepeartor` : 배열의 각 요소를 구분할 문자열을 지정한다. 이 구분자는 필요한 경우 문자열로 변환된다.
- 생략 할 시 배열의 요소들이 쉼표로 구분된다.

```jsx
let arr = s.split('zero'); // // [ 'one', '', '' ]
console.log(arr.join(0); // 'one00'
```

- 구분자를 0으로 지정했기 때문에 0으로 연결된다.
- 빈 값이기 존재하기 때문에 `one00` 으로 반환된다.

# 객체 비교

- 객체끼리의 비교는 JSON.Stringfy(objname) 으로 변형 후 비교한다.

```jsx
let test = {
    lang: 'java',
    job: 'backend'
};
let test2 = {
    lang: 'java',
    job: 'backend'
};
console.log(test === test2) // false
console.log(JSON.stringify(test) === JSON.stringify(test2)) // true
```

# 문자열 정렬

문자열인 `hello` 가 있다고 가정했을 때  해당 문자열의 각각의 문자들을 사전순으로 정렬을 할 경우가 있을 수 있다.

- JS의 정렬 메서드인 sort()가 있지만, 해당 메서드는 배열에서 사용할 수 있는 메서드이다.
- 그래서 해당 문자열을 배열로 선언 후 정렬을 하면 된다.

```jsx
let str = 'hello';
str= str.split('').sort().join(''); // ehllo
```

- split 메서드로 각각의 문자를 배열의 원소로 반환하고 sort()메서드를 사용한다
- sort() 메서드는 문자 기준으로 정렬되는 메서드 이기 때문에 인자를 넣지 않아도 된다.
- 그 후 join 메서드로 모든 문자열을 기준 없이 합친다.

# 순열(완전탐색)

- 비트 연산자를 이용하여 구할 수 있다.

```jsx
const solve = (cnt, used, val) => {
        if (val !== 0) permutation.push(val);
        if (cnt >= numbers.length) return;
        for (let i = 0; i < arr.length; i++) {
            if ((used & 1 << i) !== 0) continue;
            solve(cnt + 1, used | 1 << i, val * 10 + arr[i]);
        }
}
solve(0,0,0)
```

- 위 코드는 [1,2,3]
- `used & 1 << i` : 같은 수가 들어가는 것을 막기 위해 선언한다.
- 즉, i 번쨰 원소가 있는지 확인하기 위해 사용한다.
- 만약 중복 순열을 이용할 경우 해당 line을 지우면 된다.
- `used | 1 << i` : i 번째 원소를 추가하기 위해 사용한다.
- 여기서 `used` 는 비트로 표현된 집합이라 생각하면 된다.

# 조합(완전탐색)

- 선택하고 선택 안하고를 생각

```jsx
const recursive = (str, pos, candi) => {
        candi = candi.split('').sort().join('');
        if (pos >= str.length) {
            if (candi.length >= 2) {
                if (!foodMaps[candi.length]) foodMaps[candi.length] = maxCount[candi.length] = {};
                if (!foodMaps[candi.length][candi]) {
                    foodMaps[candi.length][candi] = 1;
                } else {
                    foodMaps[candi.length][candi]++;
                }
                maxCount[candi.length] = maxCount[candi.length] >= foodMaps[candi.length][candi] ? maxCount[candi.length] : foodMaps[candi.length][candi];

            }
            return;
        }
   **recursive(str, pos + 1, candi += str[pos]);
   candi = candi.substring(0, candi.length - 1);
   recursive(str, pos + 1, candi);**
 }
```

위 코드는 카카오 메뉴리뉴얼 문제중 조합 식을 짜는 코드이다.

첫 번째 재귀는 선택을 한다는 것이고 후에 선택된 값을 하나 제거하여 다시 재귀를 하여 선택 안하고를 실행시킨다.

# 진법

- `toString()`

```jsx
var value = 10;
// 10진법 -> 2, 8, 16 진법으로 변환
value.toString(2);    // 1010
value.toString(8);    // 12
value.toString(16);   // a

// 2,8,16 -> 10 진법으로 변환
Number.parseInt(bin, 2);    // 10
Number.parseInt(oct, 8);    // 10
Number.parseInt(hex, 16);   // 10
```

# 배열 순서 당기기

- 배열의 순서를 1칸씩 당기거나 밀어야 하는 경우가 있다.

```jsx
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
}
```

- 위 코드는 원소들을 한 칸 씩 당길 때 사용할 수 있는 코드이다.
- 하지만 앞으로 한 칸 씩 밀 경우는 반대로 해야 한다.

```jsx
for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arr[i - 1];
}
```

- 조건들을 붙여야 배열이 완성되지만 생략했다.
- 이 방법을 이용해 2차원 배열에서 **직사각형 테두리**를 회전할 경우에 사용할 수 있다.

## 직사각형 테두리 회전

- 2차원 배열에서 테두리를 회전할 경우에 사용할 수 있다.
- 직사각형의 모서리 중 **왼쪽**과 **아래**쪽을 시계방향으로 밀 경우 배열을 기준으로 보면 당겨지는 것이기 때문에 배열을 1칸 씩 당길 때 사용하는 방법을 하면된다.
- 하지만 **오른쪽**과 **위쪽**을 시계방향으로 돌릴 경우에는 원소들을 1칸씩 밀게 되는 경우기 때문에 아래와 같은 방식으로 작성을 해야 한다.

# String.repeat()

- 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다.

```sql
'abc'.repeat(2) // abcabc
```

# String.replace()

- 정규표현식을 이용해서 전체 문자열을 치환할 수 있다.
- 두 번째 매개변수로 함수를 이용할 수 있다.

```jsx
score = score.replace(/[A-Z]#/g, (e) => e[0].toLowerCase());
```

- 위 코드는 만약 A#이란 문자열을 찾을 경우 a#으로 치환을 하는 코드이다.