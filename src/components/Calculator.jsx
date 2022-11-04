import { useState } from 'react';
import '../stylesheets/Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  const { total, next, operation } = state;

  const buttons = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  return (
    <>
      <section className="cal-container">
        <h2 data-testid="subtitle">
          Lets do some
          {' '}
          <i> maths!</i>
        </h2>
        <div className="calculator">
          <div className="container">
            <div className="display" data-testid="display">
              {total}
              {operation}
              {next}
            </div>
            <div className="keys">
              {buttons.map((button) => (
                <button type="button" className="btn" onClick={handleClick} key={button} data-testid={button}>{button}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Calculator;
