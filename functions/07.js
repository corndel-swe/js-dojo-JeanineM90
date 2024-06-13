/**
 * Checks if a student passed an exam.
 * @param {number} score - The student's score.
 * @param {number} passMark - The passing mark.
 * @returns {boolean} True if the score is equal to or higher than the pass mark, false otherwise.
 *
 * Example: didPass(75, 50) should return true.
 */
export function didPass(score, passMark) {
  /* TODO: return true if score is greater than or equal to passMark
  Need to compare teh score with the passMark
  Is the score equal to or higher than the pass mark?
  If so, it's true (return)
  Similar to 06, we are using >=
  */
  return score >= passMark
}
