/**
 * Calculates the distance that can be traveled with a given amount of fuel.
 * @param {number} fuelAmount - The amount of fuel in liters.
 * @param {number} fuelEfficiency - The fuel efficiency in kilometers per liter.
 * @returns {number} The distance that can be traveled.
 *
 * Example: travelDistance(20, 15) should return 300.
 */
export function travelDistance(fuelAmount, fuelEfficiency) {
  /* TODO: return the distance by multiplying fuelAmount and fuelEfficiency
  Similar to 01 & 02, it's going to be fuelAmount multiplied by fuelEfficiency (20 x 15 = 300)
  The function is travelDistance. Can you return in one line rather than defining what the return should be:
  */
  return fuelAmount * fuelEfficiency
}

// previously, I would have written out const total then return total
// but as the function stipulates the parameters already, we can just multiple these as the return 