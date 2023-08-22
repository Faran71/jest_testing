const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expect(sum(1234,4321)).toBe(5555);
  });

  test('can add two negative numbers', () => {
    expect(sum(-4,-1)).toBe(-5);
  });

  test('can add zero', () => {
    expect(sum(5,0)).toBe(5)
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', ()=> {
    expect(subtract(4,3)).toBe(1);
  });

  test('can subtract one positive and one negative number', ()=> {
    expect(subtract(4,-3)).toBe(7);
  });

});

describe('multiply', () => {

  test('can mutiply two small positive numbers', () => {
    expect(multiply(4,5)).toBe(20);
  });

  test('can mutiply two small negative numbers', () => {
    expect(multiply(-4,-5)).toBe(20);
  });

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expect(divide(6,2)).toBe(3);
  });

  test('can divide one positive by one negative number', () => {
    expect(divide(6,-2)).toBe(-3);
  });

});

describe('modulus', () => {

  test('can find modulus of two small positive numbers', ()=> {
    expect(modulus(6,4)).toBe(2);
  });

  test('can find modulus of one positive and one negative number', ()=> {
    expect(modulus(-1,2)).toBe(-1);
  });

  test('can find modulus of two small negative numbers', ()=> {
    expect(modulus(-6,-4)).toBe(-2);
  });

});

describe('even', () => {

  test('can find whether zero is even', ()=> {
    expect(even(0)).toBe(true);
  });

  test('can find whether a positive number is even', ()=> {
    expect(even(16)).toBe(true);
  });

  test('can find whether a negative number is even', ()=> {
    expect(even(-15)).toBe(false);
  });

});

describe('odd', () => {
// crashes for large numbers
  test('can find whether zero is odd', ()=> {
    expect(odd(0)).toBe(false);
  });

  test('can find whether a small positive number is odd', ()=> {
    expect(odd(18801)).toBe(true);
  });

  test('can find whether a small negative number is odd', ()=> {
    expect(odd(-1)).toBe(true);
  });

});
