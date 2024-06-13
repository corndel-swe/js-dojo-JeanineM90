/**
 * Checks if a number is between two other numbers.
 * @param {number} num - The number to check.
 * @param {number} lower - The lower bound.
 * @param {number} upper - The upper bound.
 * @returns {boolean} True if num is strictly between lower and upper, false otherwise.
 *
 * Example: isBetween(5, 1, 10) should return true.
 */
export function isBetween(num, lower, upper) {
  // TODO: Return true if num is greater than lower and less than upper
  return num > lower && num < upper
}
/*
Mixture of operators needed: greater than and && 
Num needs to be between upper and lower to be true (returned) - num need to be be true for both upper and lower
E.G num is 5 and between 1 and 10, so true 
If num is greater than lower, and smaller that upper, it's true: num > lower %% < uppper then return - had to specify num twice (syntax error, Unexpected token '<')
*/