/**
 * Calculate the total cost of the last two items in the array.
 * @param {number[]} prices - The array of prices.
 * @returns {number} The sum of the last and second-last price.
 * @example
 * endSum([12.99, 23.45, 34.50, 45.99, 56.75]); // returns 102.74
 */
export function endSum(prices) {
  // TODO: Get the last element from the array
  // TODO: Get the second-last element from the array
  // TODO: Return the sum of the last and second-last elements

  /* attempt 1 - notes below 
  const fourth = prices[3] //45.99
  const fifth = prices[4] //56.75
  return fourth + fifth
  */

  const last = prices[prices.length - 1]
  const secondLast = prices[prices.length - 2]
  return last + secondLast

}

/* attempt 1
Similar to 01, but it's the last two items of the array
Use prev code and change index number
*/
/*
This didn't work:

✔ should return the sum of the last two prices
    1) should work with different price values    
    2) should handle arrays with only two prices

So checked example solution for pointers/ comparison:

export function endSum(prices) {
  const last = prices[prices.length - 1]
  const secondLast = prices[prices.length - 2]
  return last + secondLast
}

This uses length- see this in "basics" of array tech doc
Why? If you don't know how many items are in the array- we don't need to count, but we know we need the last and 2nd to last
This would be lenth -1 etc
A cleaner way, and still returns what we need- I was too specifc with "fourth and fifth"
*/