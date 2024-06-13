/**
 * Calculates the adjusted salary after applying a tax deduction.
 * @param {number} salary - The initial salary.
 * @param {number} taxRate - The tax rate as a percentage.
 * @returns {number} The adjusted salary.
 *
 * Example: adjustedSalary(50000, 10) should return 45000.
 */
export function adjustedSalary(salary, taxRate) {
  // TODO: apply the tax deduction
  // TODO: return the adjusted salary
  return salary - (taxRate / 100) // this isn't complete- 1 pass and 4 failures 
}

/*
multiple operators:
We will need salary e.g 50000 to return the adjust salary of 45000 after being modified by the tax rate 
The calculation of the tax rate is a percentage that needs minusing from the salary 
We also need divide operator to / by 100 (percent)- So it's the tax rate calculation that is / 100  
This will need to be done in two parts using ()
*/
/*
The example solution is
return salary * (1 - taxRate / 100)
I am missing the 1- and the minus needs to be within the brackets- why? 
*/