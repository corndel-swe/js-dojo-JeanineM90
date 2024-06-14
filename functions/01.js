/**
 * Calculates the total cost of buying multiple items.
 * @param {number} price - The price of a single item.
 * @param {number} quantity - The number of items purchased.
 * @returns {number} The total cost.
 *
 * Example: totalCost(10, 3) should return 30.
 */
export function totalCost(price, quantity) {
  // TODO: return the total cost by multiplying price and quantity
  /* Tech Docs- recap functions
    Remember multiply is "*" 
  */

  const total = price * quantity
  return total

}

/*
totalCost is the function, the round brackts envoke this function
In the example, they have mulitplied the price by the quantity: So, 10*3 to return 30
Example solution from classroom:

export function totalCost(price, quantity) {
  return price * quantity
}

Here, they go streamline it by simply saying return the answer of the price times the quantity.
I defined what the total should be (the calculatio), then returned separately.
The difference of making 3 lines of code into two
  */