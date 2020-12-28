export function isLeapYear(year: number): boolean {
  const isDivisibleBy = (number: number): boolean => year % number === 0;

  return isDivisibleBy(4) && !(isDivisibleBy(100) && !isDivisibleBy(400));
}
