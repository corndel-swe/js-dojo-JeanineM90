/**
 * Checks if a person can go for a picnic based on the weather and free time.
 * @param {boolean} isSunny - True if it is sunny.
 * @param {boolean} isWeekend - True if it is the weekend.
 * @returns {boolean} True if it is sunny and it is the weekend, false otherwise.
 *
 * Example: canGoPicnic(true, true) should return true.
 */
export function canGoPicnic(isSunny, isWeekend) {
  /* TODO: return true if both isSunny and isWeekend are true
  Logical Operators && (and)
  a && b (true if a and b are both true, otherwise false)
  So isSunny and isWeekend both need to be true 
  */
  return isSunny && isWeekend
}
