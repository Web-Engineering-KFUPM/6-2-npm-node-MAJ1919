import _ from "lodash";

export function parseNumbers(input) {
  // Convert strings to numbers and remove NaN/falsy values
  const numbers = _.map(input, (str) => Number(str));
  return _.compact(numbers);
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}

