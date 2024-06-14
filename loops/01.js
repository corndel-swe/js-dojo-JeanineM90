/**
 * Finds the sum of all numbers smaller than the given input.
 *
 * @param {number} input - The input number.
 * @returns {number} - The sum of all numbers smaller than the input.
 *
 * @example
 * // returns 10
 * sumSmallerNumbers(5);
 */
export function sumSmallerNumbers(input) {
  // TODO: Initialize a variable to hold the sum.
  // TODO: Use a for loop to iterate from 1 to one less than the input number.
  // TODO: Add each number to the sum variable.
  // TODO: Return the sum.

  let sum = 0 // let allows you to declare variables that can be changed later
  for (let i = 1; i < input; i++) { // i is 1, if input (number) is greater than 1, increase the value if i by 1. 
    sum += i // the sum plus i 
  }
  return sum
}

/*
'should return 10 for input 5'
(sumSmallerNumbers(5), 10)

Input is 5, loops all of the numbers smaller than this, then these summed together is 10
(4+3+2+1)

--

https://tech-docs.corndel.com/js/for-loops.html

We need to use let, sum and the param input
Needed help from the example solution to get started 

--

+- 
adds a value to a variable
example is x += y, same as x = x + y

Concatenation of two numbers:
let x = 2; 
let y = 5; 
console.log(x += y); // which is x = x + y, so 2+5
Output is 7 
*/