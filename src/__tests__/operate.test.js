import operate from '../logic/operate';

describe('operate function should', () => {
  test('return 4 for the addition of 2 and 2', () => {
    const result = operate('2', '2', '+');
    expect(result).toEqual('4');
  });
  test('return 125 for the substraction of 25 from 150', () => {
    const result = operate('150', '25', '-');
    expect(result).toEqual('125');
  });
  test('return 18532 for the multiplication of 452 and 41', () => {
    const result = operate('452', '41', 'x');
    expect(result).toEqual('18532');
  });
  test('return 20 for the division of 60 by 3', () => {
    const result = operate('60', '3', '÷');
    expect(result).toEqual('20');
  });
  test('return "Can\'t divide by 0."  for the division of 60 by 0', () => {
    const result = operate('60', '0', '÷');
    expect(result).toEqual('Can\'t divide by 0.');
  });
  test('return 0 for the modulo of 2 and 2', () => {
    const result = operate('2', '2', '%');
    expect(result).toEqual('0');
  });
  test('return "Can\'t find modulo as can\'t divide by 0." for the modulo of 2 and 0', () => {
    const result = operate('2', '0', '%');
    expect(result).toEqual('Can\'t find modulo as can\'t divide by 0.');
  });
  test('throw error for unknown operation', () => {
    expect(() => operate('25', '4', '@')).toThrow('Unknown operation \'@\'');
  });
});
