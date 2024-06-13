/**
 * Add a new temperature to the end of the array.
 * @param {number[]} temperatures - The array of temperatures.
 * @param {number} newTemp - The new temperature to add.
 * @returns {number[]} The updated array of temperatures.
 * @example
 * addTemperature([22, 23, 19, 25, 21], 26); // returns [22, 23, 19, 25, 21, 26]
 */
export function addTemperature(temperatures, newTemp) {
  // TODO: Use the push() method to add the new temperature to the end of the array
  // TODO: Return the updated array

  temperatures.push(newTemp)
  return temperatures

}
/*
Use temperatures.push(newtemp) to add a new item to the end of the array
To break this down, it will add the new temp of 26 to the end of the temperatures array:
temperatures is the array, use push to add in the new value to the end of the list 
Remember to return... 
*/