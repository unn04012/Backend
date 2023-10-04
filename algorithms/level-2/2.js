function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length; i++) {
    const prefix = phone_book[i];
    if (i === phone_book.length - 1) break;
    const nextPrefix = phone_book[i + 1].slice(0, prefix.length);

    if (prefix === nextPrefix) return false;
  }

  return true;
}

const phone_book = ['12', '2123'];
const result = solution(phone_book);

console.log(result);
