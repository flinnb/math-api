import * as mathlib from '../lib/math';
/**
 * Math is an API endpoint that allows you to return a result based off inputs.
 * This MUST support all available math functions defined in the "/lib/math.js".
 *
 * @param body
 * This assumes the body is the format:
 * {
 *   "operation": "{operation},
 *   "a": {number, array of numbers},
 *   "b": {number}
 * }
 * operation: the math operation you wish to perform
 * a: the first item of the math expression, or, an array of numbers for the mean
 * b: the second item of the math expression
 */
export function math (body) {
  let mathResult = null;

  switch (body.operation) {
    case "sum":
      mathResult = mathlib.sum(body.a, body.b);
      break;
    case "subtract":
      mathResult = mathlib.subtract(body.a, body.b);
      break;
    case "divide":
      mathResult = mathlib.divide(body.a, body.b);
      break;
    case "multiply":
      mathResult = mathlib.multiply(body.a, body.b);
      break;
    case "mean":
      mathResult = mathlib.mean(body.a);
      break;
  }
  return {
    result: mathResult
  }
}
