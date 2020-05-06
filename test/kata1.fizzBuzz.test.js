const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(69)).toBe('Fizz');
    expect(fizzBuzz(-6)).toBe('Fizz');
  
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(100)).toBe('Buzz');
    expect(fizzBuzz(-5)).toBe('Buzz');
  
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(75)).toBe('FizzBuzz');
    expect(fizzBuzz(-30)).toBe('FizzBuzz');
  
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(11)).toBe(11);
    expect(fizzBuzz(121)).toBe(121);
    expect(fizzBuzz(0.51)).toBe(0.51);
  });
});
