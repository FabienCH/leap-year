import { isLeapYear } from './index';

describe('A year', () => {
  it('is not a leap year if not divisible by 4', () => {
    expect(isLeapYear(1997)).toBeFalsy();
  });

  it('is a leap year if divisible by 4', () => {
    expect(isLeapYear(1996)).toBeTruthy();
    expect(isLeapYear(1992)).toBeTruthy();
  });

  it('is a leap year if divisible by 400', () => {
    expect(isLeapYear(1600)).toBeTruthy();
    expect(isLeapYear(2000)).toBeTruthy();
  });

  it('is not a leap year if divisible by 100 but not by 400', () => {
    expect(isLeapYear(1800)).toBeFalsy();
    expect(isLeapYear(2200)).toBeFalsy();
  });
});
