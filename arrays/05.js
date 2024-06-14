/**
 * Return an array containing only the first and the last name from the array.
 * @param {string[]} names - The array of names.
 * @returns {string[]} An array containing the first and last names.
 * @example
 * firstAndLastName(['Alice', 'Bob', 'Charlie', 'David', 'Eve']); // returns ['Alice', 'Eve']
 */
export function firstAndLastName(names) {
  // TODO: Get the first element from the array
  // TODO: Get the last element from the array
  // TODO: Return an array containing the first and last elements
  const first = names[0]
  const last = names[names.length - 1]
  return [first, last]
}

/*
Need to use const to return first value
Length -1 for last item of the array
Return these two values only
If it was return the items inbetween, it would be slice
*/

// forgot the square brackets around first, last in the return - this is a string 