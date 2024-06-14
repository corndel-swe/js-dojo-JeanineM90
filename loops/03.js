/**
 * Finds the sum of all even numbers smaller than the given input.
 *
 * @param {number} input - The input number.
 * @returns {number} - The sum of all even numbers smaller than the input.
 *
 * @example
 * // returns 6
 * sumEvenNumbers(5);
 */
export function sumEvenNumbers(input) {
  // TODO: Initialize a variable to hold the sum.
  // TODO: Use a for loop to iterate from 1 to one less than the input number.
  // TODO: Check if the current number is even.
  // TODO: If it is, add it to the sum variable.
  // TODO: Return the sum.

  let sum = 0
  for (let i = 1; i < input; i++) {
    if (i % 2 === 0) { // remember === is equal value and equal type e.g number and string 
      sum += i
    } // nested loop - loop within a loop: it needs to find first find the values that meet the "less than" criteria, then sort the ones that are even to be used in the sum 
  }
  return sum

}

/* similar to 01, but even numbers only by using % 2 so need an extra line 
  let sum = 0 
  for (let i = 1; i < input; i++) {  
    sum += i // the sum plus i 
  }
  return sum
*/