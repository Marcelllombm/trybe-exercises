const convertToRoman = require('./roman-numerals');


describe('convert numbers form 1 to 4', () => {
  test('if converToRoman using 1 returns "I"',() => {  
    // espero que ao chamar a função convertaToRoman(1) o retorno seja I
    expect(convertToRoman(1)).toBe('I');
  });

  test('if converToRoman using 2 returns "II"',() => {  
    // espero que ao chamar a função convertaToRoman(1) o retorno seja I
    expect(convertToRoman(2)).toBe('II');
  });

  test('if converToRoman using 3 returns "III"',() => {  
    // espero que ao chamar a função convertaToRoman(1) o retorno seja I
    expect(convertToRoman(3)).toBe('III');
  });

  test('if converToRoman using 4 returns "IV"',() => {  
    // espero que ao chamar a função convertaToRoman(1) o retorno seja I
    expect(convertToRoman(4)).toBe('IV');
  });

});

test('converts numbers from 5 to 9',() => {
  expect(convertToRoman(5)).toBe('V');
  expect(convertToRoman(6)).toBe('VI');
  expect(convertToRoman(7)).toBe('VII');
  expect(convertToRoman(8)).toBe('VIII');
  expect(convertToRoman(9)).toBe('IX');
})

describe('convert numbers from 10, 11, 12, 13,14, 15, 26 and 43 ',() => {
  it('should return "X" if converToRoman is called using 10', () => {
    expect(convertToRoman(10)).toBe('X');
  });

  it('should return "XI" if converToRoman is called using 12', () => {
    expect(convertToRoman(11)).toBe('XI');
  });

  it('should return "XII" if converToRoman is called using 12', () => {
    expect(convertToRoman(12)).toBe('XII');
  });

  it('should return "XIII" if converToRoman is called using 13', () => {
    expect(convertToRoman(13)).toBe('XIII');
  });

  it('should return "XIV" if converToRoman is called using 14', () => {
    expect(convertToRoman(14)).toBe('XIV');
  });

  it('should return "XV" if converToRoman is called using 15', () => {
    expect(convertToRoman(15)).toBe('XV');
  });

  it('should return "XXVI" if converToRoman is called using 26', () => {
    expect(convertToRoman(26)).toBe('XXVI');
  });

  it('should return "XLIII" if converToRoman is called using 43', () => {
    expect(convertToRoman(43)).toBe('XLIII');
  });

})
