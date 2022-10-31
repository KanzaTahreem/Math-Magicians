import { useState } from 'react';
import styles from '../stylesheets/Calculator.module.css';
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
    <section className={styles.calculator}>
      <div className={styles.container}>
        <div className={styles.display}>
          {total}
          {operation}
          {next}
        </div>
        <div className={styles.keys}>
          {buttons.map((button) => (
            <button type="button" className={styles.btn} onClick={handleClick} key={button}>{button}</button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
