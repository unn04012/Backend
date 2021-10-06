let n = 5000;
// n = 5;
solution(n)
function solution(n) {
    var ans = 1;
    console.log(n.toString(2))
    while (n !== 1) {
        if ((n % 2) !== 0) {
            n--;
            ans++;
        }
        n /= 2;
    }
    return ans;
}