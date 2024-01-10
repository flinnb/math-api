/**
 * sum is used to add two numbers together, and return the result. If
 * either of the paramters are undefined, it returns null
 *
 * @param a - the first number for the expression
 * @param b - the second number for the expression
 */
export function sum (a, b) {
  let output = null;

  if (a != undefined && b != undefined) {
    output = a + b;
  }
  return output;
}

/**
 * subtract is used to ubtract one number from another, and return
 * the result. If either of the paramters are undefined, it returns
 * null
 *
 * @param a - the first number for the expression
 * @param b - the second number for the expression
 */
export function subtract(a, b) {
  let output = null;

  if (a != undefined && b != undefined) {
    output = a - b;
  }
  return output;
}

/**
 * divide is used to divide on number by another, and return the
 * result. If either of the paramters are undefined, it returns
 * null. If the divisor is zero, we also return null.
 *
 * @param a - the first number for the expression
 * @param b - the second number for the expression
 */
export function divide (a, b) {
  let output = null;

  if (a != undefined && b != undefined && b != 0) {
    output = a / b;
  }
  return output;
}

/**
 * * is used to multiply two numbers together, and return the
 * result. If either of the paramters are undefined, it
 * returns null
 *
 * @param a - the first number for the expression
 * @param b - the second number for the expression
 */
export function multiply (a, b) {
  let output = null;

  if (a != undefined && b != undefined) {
    output = a * b;
  }
  return output;
}

/**
 * sum is used to calculate the mean of an array of numbers,
 * and return the result. If any of the elements of the array
 * are null, we return null
 *
 * @param a - the array of numbers to get the mean of
 */
export function mean (a) {
  let output = null;
  let total = 0;
  let hasNull = false;

  if (a != undefined && a.length != 0) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] == null) {
        hasNull = true;
        break;
      }
      total += a[i];
    }
    if (!hasNull) {
      output = total / a.length;
    }
  }
  return output;
}
