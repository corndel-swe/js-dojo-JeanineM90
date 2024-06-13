/**
 * Remove the first element and add it to the end of the array.
 * @param {number[]} ages - The array of ages.
 * @returns {number[]} The updated array of ages.
 * @example
 * shiftAllAges([30, 25, 20, 35, 40]); // returns [25, 20, 35, 40, 30]
 */
export function shiftAllAges(ages) {
  // TODO: Use the shift() method to remove the first element
  // TODO: Use the push() method to add the removed element to the end of the array
  // TODO: Return the updated array

  const first = ages.shift()
  ages.push(first)
  return ages

}

/*
Have used shift in 04 and push in 03
However, in this one, we are taking one value and adding it elsewhere, not removing 
ages.shift() -- don't forget this will need const first value (needed example solution to check this/ needed prompt)
ages.push(newage) -- this can't be new age as we're taking the first element and adding it back in, so should use const first 
retuen the ages array
*/