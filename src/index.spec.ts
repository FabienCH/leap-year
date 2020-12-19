import { isLeapYear } from './index';

describe('isLeapYear', () => {
  it('a year is not a leap year if not divisible by 4', () => {
    expect(isLeapYear(1997)).toBeFalsy();
  });

  it('a year is a leap year if divisible by 4', () => {
    expect(isLeapYear(1996)).toBeTruthy();
    expect(isLeapYear(1992)).toBeTruthy();
  });
});
