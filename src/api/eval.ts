/*
              ---- LIFECYCLE ----- 
input ==> 
==> calculate() ==> 
==> while ==> 
==> has operator? 
  {
    true:     
      ==> split by calculateExpr()
      ==> each operand is number? 
      {
      true: 
        ==> replace base input with result
      false:
        ==> calculate each operand expression by calculate()
        back to start of cycle
      }
      ==> return new input with replaced expression

    false: 
      ==> return number
  }
*/
const baseOperations = (
  operand1: number,
  operand2: number,
  operator: string
): number => {
  let res = 0;
  console.log("base operation = = ");
  switch (operator) {
    case "x":
      res = operand1 * operand2;
      break;
    case "/":
      res = operand1 / operand2;
      break;
    case "+":
      res = operand1 + operand2;
      break;
    case "-":
      res = operand1 - operand2;
      break;
  }
  return res;
};

const calculate = (input: string): number => {
  console.groupCollapsed("calculate()");
  console.log("in >>", input);
  let current_input = input;
  while (true) {
    const operatorIndex: number =
      current_input.search(/[x\/]/g) > -1
        ? current_input.search(/[x\/]/g)
        : current_input.search(/[+-]/g);

    const operator: string | undefined = current_input[operatorIndex];

    if (typeof operator === "undefined") {
      const res = parseInt(current_input);
      console.log("out << ", res);
      return parseInt(current_input);
    } else {
      current_input = calculateExpression(
        current_input,
        operatorIndex,
        operator
      );
    }
    console.groupEnd();
  }
};

const calculateExpression = (
  input: string,
  operatorIndex: number,
  operator: string
): string => {
  console.groupCollapsed("calculate expression");
  // get first operand
  let before: string[] | string = input.slice(0, operatorIndex).split("");
  const startIndex: number = before
    .reverse()
    .join("")
    .search(/[/*+-]/g); // find last + or - sign index
  console.table({ before: before, "start index": startIndex });
  // console.log("reversedStartIndex", reversedStartIndex);
  before = before.reverse().join("");
  let operand1: string | number = before;

  if (startIndex >= 0) {
    console.log("entered in if ");
    operand1 = before.slice(-startIndex);
  }
  //
  // get second operand
  const after: string = input.slice(operatorIndex + 1);
  const endIndex: number = after.search(/[/*+-]/g);
  console.table({ "end index": endIndex, after: after });
  let operand2: string | number = after;
  if (endIndex >= 0) {
    operand2 = after.slice(0, endIndex);
  }
  console.table({ operand1: operand1, operand2: operand2, operator: operator });

  // calculate and replace
  operand1 = calculate(operand1);
  operand2 = calculate(operand2);

  const res = baseOperations(operand1, operand2, operator);
  console.groupEnd();
  console.log("==================== replaced input ========================");
  const replacedInput = `${
    startIndex === -1 ? 0 : before.slice(0, -startIndex)
  }${res}${endIndex === -1 ? "" : input.slice(operatorIndex + endIndex + 1)}`;
  console.log(input, " == to ==>", replacedInput);
  // return;
  return replacedInput;
};
export default calculate;
