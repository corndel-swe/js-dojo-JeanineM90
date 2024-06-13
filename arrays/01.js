/**
 * Calculate the total cost of the first two items in the array.
 * @param {number[]} prices - The array of prices.
 * @returns {number} The sum of the first and second price.
 * @example
 * startSum([12.99, 23.45, 34.50, 45.99, 56.75]); // returns 36.44
 */
export function startSum(prices) {
  // TODO: Get the first element from the array
  // TODO: Get the second element from the array
  // TODO: Return the sum of the first and second elements

  const first = prices[0] //12.99
  const second = prices[1] //23.45
  return first + second
}

/*
In example, the return is the sum of 12.99 + 23.45
We will need const as it's specifically these two values in the list 
Declare the first price in the list - remembar that this is 0 in the index
Then the second price in the array 
Return sum of them
E.G: First (of prices array) is position 0, second is position 1, add them together to get the answer 

Tech Doc example:
const books = [
  'Things Fall Apart', [0]
  'Beloved',
  'One Hundred Years of Solitude',
  'The God of Small Things', [3]
  'Persepolis'
]

console.log(books[0])
console.log(books[3])

Results are Things Fall Apart and The God of Small Things
*/