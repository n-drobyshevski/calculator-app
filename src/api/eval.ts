const calculate = (input: string): number => {
  console.log("in >>", input);

  let res = 0;
  const operatorIndex: number = input.search(/[+-]/g);
  console.log(operatorIndex);
  console.log(input[operatorIndex]);
  const operator: string | undefined = input[operatorIndex];
  if (typeof operator === "string") {
    console.log("in if");
    const operand1: string = input.slice(0, operatorIndex);
    const operand2: string = input.slice(operatorIndex + 1);
    if (operator === "+") {
      res = calculate(operand1) + calculate(operand2);
    } else if (operator === "-") {
      res = calculate(operand1) - calculate(operand2);
    }
  } else {
    res = parseInt(input);
  }
  console.log("out << ", res);
  return res;
};
export default calculate;
