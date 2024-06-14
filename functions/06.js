/**
 * Checks if a person is old enough to vote.
 * @param {number} age - The age of the person.
 * @returns {boolean} True if the person is 18 or older, false otherwise.
 *
 * Example: canVote(20) should return true.
 */
export function canVote(age) {
  /* TODO: return true if age is greater than or equal to 18
   https://tech-docs.corndel.com/js/comparison-operators.html
   So we will need a >= b 
   Is a bigger than or equal to b? 
   E.G is age larger than or equal to 18? If so, return 
  */
  return age >= 18
}

/* in 06 test file:
'should return true when age is 20'
'should return false when age is 17'
'should return true when age is 18'
All complete in terminal, as results are equal to or greater than 18- meet the criteria of canVote 
*/