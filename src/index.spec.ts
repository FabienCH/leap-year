import { isLeapYear } from './index';

describe('isLeapYear', () => {
  it('a year is not a leap year if not divisible by 4', () => {
    expect(isLeapYear(1997)).toBeFalsy();
  });
});
