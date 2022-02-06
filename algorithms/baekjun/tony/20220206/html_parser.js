function solution(html) {
  let answer = [];
  //   answer = html.split(/[<](.*?)[\/>]/g);
  const divTags = html.match(/<div.*?>.*?<\/div>/g);
  console.log(divTags);
  divTags.forEach((div, index) => {
    const pTags = div.split(/<p(.*?)>(.*?)<\/p>/g);
    const title = abstractTitle(pTags[0]);
    const paragarphs = [];
    for (let i = 1; i < pTags.length - 1; i++) {
      let p = pTags[i].trim();
      if (!p.length) continue;
      p = deleteTags(p);
      paragarphs.push(p);
    }
    answer.push([`title : ${title}`, paragarphs.join("\n")]);
  });
  return answer.map((e) => e.join("\n")).join("\n");
}
const deleteTags = (p) => {
  let str = "";
  let prev = "";
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "<") {
      while (p[++i] !== ">") {}
      continue;
    }
    if (prev === " " && prev === p[i]) continue;
    str += p[i];
    prev = p[i];
  }
  return str;
};
const abstractTitle = (div) => {
  let title = "";
  for (let i = 0; i < div.length; i++)
    if (div[i] === '"') {
      while (div[++i] !== '"') title += div[i];
      break;
    }
  return title;
};

let input = require("fs")
  .readFileSync("../../problem.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input[0]));

let r = "";
let p = input[0].match(/<div title=".*?">|<p>.*?<\/p>/g);
console.log(p);
p.forEach((b) => {
  if (b.startsWith("<d")) {
    r += "title : " + b.match(/(?<=title=").*(?=")/) + "\n";
  } else {
    r += b.replace(/<.*?>|<\/.*?>/g, "").replace(/ {2,}/g, " ") + "\n";
  }
});
console.log(r);
