import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Calculator from '../../components/Calculator';

describe('Calculator page', () => {
  beforeEach(async () => {
    render(<Calculator />);
  });

  test('should be displayed', () => {
    const heading = screen.getByTestId('subtitle');
    expect(heading).toHaveTextContent('Lets do some maths!');
  });

  test('should update display when 0 is clicked', () => {
    const zeroBtn = screen.getByTestId('0');
    const display = screen.getByTestId('display');
    userEvent.click(zeroBtn);
    expect(display).toHaveTextContent('0');
  });

  test('should update display when 1 + 1 is clicked', () => {
    const oneBtn = screen.getByTestId('1');
    const plusBtn = screen.getByTestId('+');
    const display = screen.getByTestId('display');
    userEvent.click(oneBtn);
    userEvent.click(plusBtn);
    userEvent.click(oneBtn);
    expect(display).toHaveTextContent('1+1');
  });

  test('return result of  1 + 1 and update display', () => {
    const oneBtn = screen.getByTestId('1');
    const plusBtn = screen.getByTestId('+');
    const equalBtn = screen.getByTestId('=');
    const display = screen.getByTestId('display');
    userEvent.click(oneBtn);
    userEvent.click(plusBtn);
    userEvent.click(oneBtn);
    userEvent.click(equalBtn);
    expect(display).toHaveTextContent('2');
  });
});
