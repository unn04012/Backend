function solution(t, p) {
  const extractSubstring = (str, leng) => {
    const strLength = str.length;
    const substrArr = [];
    for (let i = 0; i <= strLength - leng; i++) {
      substrArr.push(str.slice(i, i + leng));
    }
    return substrArr;
  };

  const substrArr = extractSubstring(t, p.length);

  return substrArr.filter((e) => Number(p) >= Number(e)).length;
}

const t = '10203';
const p = '15';

const result = solution(t, p);
console.log(result);
