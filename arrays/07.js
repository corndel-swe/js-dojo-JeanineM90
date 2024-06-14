/**
 * Return a new array containing temperatures for the weekdays only (first 5 days).
 * @param {number[]} temps - The array of temperatures.
 * @returns {number[]} An array of temperatures for the weekdays.
 * @example
 * extractWeekdays([15, 16, 18, 20, 21, 19, 17]); // returns [15, 16, 18, 20, 21]
 */
export function extractWeekdays(temps) {
  // TODO: Use the slice() method to get the first 5 elements of the array
  // TODO: Return the new array containing only the weekdays

  // attempt 1:
  //temps.slice(0, 4)
  //return temps

  // attempt 2: it can be one line
  //return temps.slice(0, 4)

  // attempt 3: 
  return temps.slice(0, 5)

}

/* 
  exclude the weekend results
  we can simply use temps.slice from 0-4 (days 1-5)
  --
  attempt 1 didn't fully pass:
    1) should return an array containing temperatures for the weekdays only
    2) should work with different temperatures
    ✔ should handle arrays with exactly five temperatures
    --
   attempt 2:
   All failed  
   Tech doc: When using .slice(a, b), the item at index a is included, but the item at index b is not.
   So it didn't include the final one 
 
Tech doc exmaple:

const books = [
  'Things Fall Apart',
  'Beloved',
  'One Hundred Years of Solitude',
  'The God of Small Things',
  'Persepolis'
]

console.log(books.slice(1, 4))

returns 
[
  'Beloved',
  'One Hundred Years of Solitude',
  'The God of Small Things'
]
*/