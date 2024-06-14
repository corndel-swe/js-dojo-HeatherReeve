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

  //20,000 30% tax 
  //20,00*30/100 = 6k
  return salary * (1-taxRate/100)
}
