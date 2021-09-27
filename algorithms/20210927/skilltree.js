let skill = "CBD";
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
skill_trees = ["CED", "CBADF"]
solution(skill, skill_trees);
function solution(skill, skill_trees) {
    var answer = 0;
    skill_trees.forEach(skill_tree => {
        let index;
        let flag = true;
        let skills = [];
        for (let i = 0; i < skill.length; i++) {
            if (skill_tree.includes(skill[i])) {
                if (i !== 0 && !(index < skill_tree.indexOf(skill[i]))) {
                    flag = false;
                    console.log(skill_tree, skill[i], index, skill_tree.indexOf(skill[i]))
                    break;
                } else {
                    if (i !== 0 && !skills.includes(skill[i - 1])) {
                        flag = false;
                        break;
                    }
                    index = skill_tree.indexOf(skill[i]);
                    skills.push(skill[i]);
                }
            }

        }
        if (flag) answer++
    });
    console.log(answer)
    return answer;
}