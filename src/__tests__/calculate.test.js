import calculate from '../logic/calculate';

describe('calculate function should', () => {
  const initalState = { total: 4, next: 2, operation: '+' };
  let result = {};
  test('return null when AC is clicked', () => {
    result = calculate(initalState, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('update next when a number key is pressed and there is no operation', () => {
    result = calculate(result, '1');
    expect(result).toEqual({ total: null, next: '1' });
  });

  test('update total when an operation key is pressed', () => {
    result = calculate(result, '+');
    expect(result).toEqual({ total: '1', next: null, operation: '+' });
  });

  test('update next when a number key is pressed after operation', () => {
    result = calculate(result, '2');
    expect(result).toEqual({ total: '1', next: '2', operation: '+' });
  });

  test('update next when a second number key is pressed after first key', () => {
    result = calculate(result, '3');
    expect(result).toEqual({ total: '1', next: '23', operation: '+' });
  });

  test('return the answer(total) when equal key is pressed', () => {
    result = calculate(result, '=');
    expect(result).toEqual({ total: '24', next: null, operation: null });
  });
});
