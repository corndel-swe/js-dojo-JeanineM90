/**
 * Finds the sum of all odd numbers smaller than the given input.
 *
 * @param {number} input - The input number.
 * @returns {number} - The sum of all odd numbers smaller than the input.
 *
 * @example
 * // returns 9
 * sumOddNumbers(6);
 */
export function sumOddNumbers(input) {
  // TODO: Initialize a variable to hold the sum.
  // TODO: Use a for loop to iterate from 1 to one less than the input number.
  // TODO: Check if the current number is odd.
  // TODO: If it is, add it to the sum variable.
  // TODO: Return the sum.

  /* attempt 2:
  let sum = 0
  for (let i = 1; i < input; i++) {
    if (i % 2 === 0) {
      sum += i
    }
    else {
      (sum % 2 != 0)
    }
  }
  return sum
*/

  // 3rd attempt: 

  let sum = 0
  for (let i = 1; i < input; i++) {
    if (i % 2 !== 0) { // else wasn't needed, !== simply used: "not equal value or not equal type"
      sum += i
    }
  }
  return sum

}

/*
See 03 but need to change even operator to odd? 

Remember filter() : filtering out items that don't match a certain condition e.g;
const evenNumbers = numbers.filter(number => number % 2 === 0)
"The statement number % 2 === 0 will return true if the number is even, and false if it's odd. 
The filter() method will only include items in the new array if the statement returns true" (Tech docs)

So can I use input.filter(i => i % 2 === 0)? Where? Do we need an else statement? 
No: TypeError: input.filter is not a function 

This is for arrays... 

--

2nd attempt: (sum % 2 != 0) as != is not equal too... simpler solution found by googling "find odd number in a loop"
However:
    1) should return 9 for input 6
    ✔ should return 0 for input 1
    2) should return 25 for input 10

3rd Attempts: checked example solution 
I was over complicating this initially, then as on the right track looking at the Comparison Operator, but added an extra step that wasn't needed

*/