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
const fillOmittedMultiplications = (input: string): string => {
  while (true) {
    const multiplicationIndex: number = input.search(/[1-9][(]/g);
    if (multiplicationIndex === -1) {
      break;
    }
    input = `${input.slice(0, multiplicationIndex + 1)}x${input.slice(
      multiplicationIndex + 1
    )}`;
    console.log("replased_input", input);
  }
  return input;
};
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
const getOperator = (
  input: string
): { operator: string | undefined; operatorIndex: number } => {
  let operatorIndex: number;

  if (input.search(/[(]/g) > -1) {
    operatorIndex = input.search(/[(]/g);
  } else if (input.search(/[/x]/g) > -1) {
    operatorIndex = input.search(/[/x]/g);
  } else {
    // ignore signed value operator (if its not after a digit or not after a ")" )
    operatorIndex = input.search(/(?<=\d|\))[+-]/g);
  }

  const operator: string | undefined = input[operatorIndex];
  return { operator: operator, operatorIndex: operatorIndex };
};

const calculate = (input: string): number => {
  console.log("in >>", input);
  // if (input.length === 0) {
  //   throw new Error("calculate function empty string argument");
  // }
  input = fillOmittedMultiplications(input);
  let current_input = input;

  while (true) {
    const { operator, operatorIndex } = getOperator(current_input);
    console.log("operatorIndex", operatorIndex);

    if (typeof operator === "undefined") {
      const res = parseFloat(current_input).toFixed(3);
      console.log("out << ", res);
      return parseFloat(res);
    } else {
      current_input = calculateExpression(
        current_input,
        operatorIndex,
        operator
      );
    }
  }
};

const getFirstOperand = (
  input: string,
  operatorIndex: number
): { operand: number; absoluteStartIndex: number } => {
  console.info("get first operand");

  // get the part of input between main operator and start boundary operator
  const before: string[] = input.slice(0, operatorIndex).split("");
  console.info("before", before);
  const relativeStartIndex: number = before
    .reverse()
    .join("")
    .search(/[/x+-]/g); // find start boundary index

  // include sign in operand if signed
  const isSignedValue =
    before[relativeStartIndex] === "+" || before[relativeStartIndex] === "-";
  console.log("relativeStartIndex", relativeStartIndex);
  let absoluteStartIndex = 0;
  if (relativeStartIndex === -1) {
    absoluteStartIndex = operatorIndex - before.length;
  } else if (
    (isSignedValue && before[relativeStartIndex + 1] === "(") ||
    (isSignedValue && relativeStartIndex === before.length - 1)
  ) {
    absoluteStartIndex = operatorIndex - before.length;
  }
  console.log("absoluteStartIndex", absoluteStartIndex);

  let operand: string;
  if (absoluteStartIndex + 1 === operatorIndex) {
    operand = String(input[absoluteStartIndex]);
  } else {
    operand = input.slice(absoluteStartIndex, operatorIndex);
  }
  const isNegative: boolean = input[absoluteStartIndex] === "-";
  console.log("start index modified", absoluteStartIndex);
  console.log("isNegative", isNegative);
  console.log("operand1", operand);
  return {
    operand: calculate(operand),
    absoluteStartIndex: absoluteStartIndex,
  };
};

const getSecondOperand = (
  input: string,
  operatorIndex: number
): { operand: number; endIndex: number } => {
  console.info("getSecondOperand");
  // end index relatively second operand
  const relativeEndIndex: number = input
    .slice(operatorIndex + 1)
    .search(/[/x+-]/g);
  // end index relatively base input
  console.log(input.slice(operatorIndex + 1));
  console.log(relativeEndIndex, "relativeEndIndex");
  console.log(operatorIndex, "operatorIndex");

  let operand = "";
  switch (relativeEndIndex) {
    case -1:
      console.log("case 1");
      operand = input.slice(operatorIndex + 1);
      break;
    case 1:
      const possible_operand = input[operatorIndex + 1];
      console.log("case 2.1");
      if (typeof possible_operand === "string") {
        console.log("case 2.2");
        operand = possible_operand;
      }
      break;
    default:
      console.log("case default");
      operand = input.slice(operatorIndex + 1, relativeEndIndex);
      break;
  }
  const absoluteEndIndex =
    relativeEndIndex === -1
      ? operatorIndex + operand.length
      : operatorIndex + relativeEndIndex;
  console.log("operand-2", operand);
  console.log("absoluteEndIndex", absoluteEndIndex);
  return { operand: calculate(operand), endIndex: absoluteEndIndex + 1 };
};

const calculateExpression = (
  input: string,
  operatorIndex: number,
  operator: string
): string => {
  if (operator === "(") {
    let endIndex = input.search(/[)]/g);
    const innerParenthesis: string = input.slice(operatorIndex, endIndex);

    const innerParenthesisIndex: number = innerParenthesis.search(/[(]/g);
    if (innerParenthesisIndex > -1) {
      let openParenthesisCount = 0;
      for (let i = 0; i < innerParenthesis.length; i++) {
        const char = innerParenthesis[i];
        if (char === ")" && openParenthesisCount === 0) {
          endIndex = i;
          break;
        } else if (char === "(") {
          openParenthesisCount += 1;
        } else if (char === ")") {
          openParenthesisCount -= 1;
        }
      }
    }
    console.log("endIndex", endIndex);
    console.log("operatorIndex", operatorIndex);
    const expressionResult: number = calculate(
      input.slice(operatorIndex + 1, endIndex)
    );
    const replacedInput = `${input.slice(0, operatorIndex)}${expressionResult}${
      endIndex >= input.length ? "input" : input.slice(endIndex + 1)
    }`;
    console.log("replaced input", replacedInput);

    return replacedInput;
  } else {
    console.log("operator index", operatorIndex);
    const { operand: operand1, absoluteStartIndex: startIndex } =
      getFirstOperand(input, operatorIndex);
    const { operand: operand2, endIndex } = getSecondOperand(
      input,
      operatorIndex
    );
    // get second operand
    console.info(input);
    console.table({
      operand1: operand1,
      operand2: operand2,
      operator: operator,
    });

    const res = baseOperations(operand1, operand2, operator);
    console.log("==================== replaced input ========================");
    const replacedInput = `${input.slice(0, startIndex)}${res}${input.slice(
      endIndex
    )}`;
    console.log(input, " == to ==>", replacedInput);
    // return;
    return replacedInput;
  }
};
export default calculate;
