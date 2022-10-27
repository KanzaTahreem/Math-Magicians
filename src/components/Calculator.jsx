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

  return (
    <section className={styles.calculator}>
      <div className={styles.container}>
        <div className={styles.display}>
          {total}
          {operation}
          {next}
        </div>
        <div className={styles.keys}>
          <div>
            <button type="button" className={styles.btn} onClick={handleClick}>AC</button>
            <button type="button" className={styles.btn} onClick={handleClick}>+/-</button>
            <button type="button" className={styles.btn} onClick={handleClick}>%</button>
            <button type="button" className={`${styles.btn} ${styles['btn-right']}`} onClick={handleClick}>÷</button>
          </div>
          <div>
            <button type="button" className={styles.btn} onClick={handleClick}>7</button>
            <button type="button" className={styles.btn} onClick={handleClick}>8</button>
            <button type="button" className={styles.btn} onClick={handleClick}>9</button>
            <button type="button" className={`${styles.btn} ${styles['btn-right']}`} onClick={handleClick}>x</button>
          </div>
          <div>
            <button type="button" className={styles.btn} onClick={handleClick}>4</button>
            <button type="button" className={styles.btn} onClick={handleClick}>5</button>
            <button type="button" className={styles.btn} onClick={handleClick}>6</button>
            <button type="button" className={`${styles.btn} ${styles['btn-right']}`} onClick={handleClick}>-</button>
          </div>
          <div>
            <button type="button" className={styles.btn} onClick={handleClick}>1</button>
            <button type="button" className={styles.btn} onClick={handleClick}>2</button>
            <button type="button" className={styles.btn} onClick={handleClick}>3</button>
            <button type="button" className={`${styles.btn} ${styles['btn-right']}`} onClick={handleClick}>+</button>
          </div>
          <div>
            <button type="button" className={`${styles.btn} ${styles['btn-expand']}`} onClick={handleClick}>0</button>
            <button type="button" className={styles.btn} onClick={handleClick}>.</button>
            <button type="button" className={`${styles.btn} ${styles['btn-right']}`} onClick={handleClick}>=</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
