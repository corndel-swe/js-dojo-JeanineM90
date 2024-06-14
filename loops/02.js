/**
 * Finds the product of all numbers smaller than the given input.
 *
 * @param {number} input - The input number.
 * @returns {number} - The product of all numbers smaller than the input.
 *
 * @example
 * // returns 24
 * productSmallerNumbers(5);
 */
export function productSmallerNumbers(input) {
  // TODO: Initialize a variable to hold the product.
  // TODO: Use a for loop to iterate from 1 to one less than the input number.
  // TODO: Multiply each number to the product variable.
  // TODO: Return the product.

  let product = 1
  for (let i = 1; i < input; i++) { // the counter; if i is lower than the input; add 1 to the counter and proceed
    product *= i //  *= is x *= y or x = x * y 
  }
  return product
}
/*
Product is basically the result 

--

For loops:
for (do first: condition: do each loop) {} // this code get's executed before the loop begins, this loop continues as long as this condition is true 

let i = 1 is the counter 
The condition is is long as i < 6 the loop will continue
After each loop has finished we want to increment i (make it bigger by 1 which is i++)

for (let i = 1: i <6; i++) {
console.log(i)
}
output is list of numbers 1-5 
*/