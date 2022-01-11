let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
let number = Number(input[0]);
console.log(solution(number, input.slice(1, input.length)));

function solution(count, commands) {
  let answer = [];
  const commandStructure = new Map([
    ["ADD", "0000"],
    ["SUB", "0001"],
    ["MOV", "0010"],
    ["AND", "0011"],
    ["OR", "0100"],
    ["NOT", "0101"],
    ["MULT", "0110"],
    ["LSFTL", "0111"],
    ["LSFTR", "1000"],
    ["ASFTR", "1001"],
    ["RL", "1010"],
    ["RR", "1011"],
    ["0", "000"],
    ["1", "001"],
    ["2", "010"],
    ["3", "011"],
    ["4", "100"],
    ["5", "101"],
    ["6", "110"],
    ["7", "111"],
  ]);
  answer = commands.map((command) => {
    let fourBit = "";
    let [cmd, rD, rA, variable] = command.split(" ");
    console.log(variable);
    // 0 : rB, 1 : #C
    if (cmd[cmd.length - 1] === "C") {
      cmd = cmd.slice(0, cmd.length - 1);
      fourBit = "1";
    } else {
      fourBit = "0";
    }
    opCode = commandStructure.get(cmd);
    rA = commandStructure.get(rA);
    rD = commandStructure.get(rD);
    if (cmd === "NOT")
      return opCode + "00" + rD + "000" + commandStructure.get(variable) + "0";
    if (fourBit === "0") {
      variable = commandStructure.get(variable) + "0";
    } else {
      // #C
      commandStructure.has(variable)
        ? (variable = "0" + commandStructure.get(variable))
        : (variable = Number(variable).toString(2));
    }
    console.log(opCode, fourBit, "0", rD, rA, variable);
    return opCode + fourBit + "0" + rD + rA + variable;
  });
  return answer.join("\n");
}
