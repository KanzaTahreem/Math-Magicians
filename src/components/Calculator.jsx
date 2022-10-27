import React from 'react';
import styles from '../stylesheets/Calculator.module.css';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <section className={styles.calculator}>
        <div className={styles.container}>
          <div className={styles.display}>
            <p>0</p>
          </div>
          <div className={styles.keys}>
            <div>
              <button type="button" className={styles.btn}>AC</button>
              <button type="button" className={styles.btn}>+/-</button>
              <button type="button" className={styles.btn}>%</button>
              <button type="button" className={`${styles.btn} ${styles['btn-right']}`}>/</button>
            </div>
            <div>
              <button type="button" className={styles.btn}>7</button>
              <button type="button" className={styles.btn}>8</button>
              <button type="button" className={styles.btn}>9</button>
              <button type="button" className={`${styles.btn} ${styles['btn-right']}`}>x</button>
            </div>
            <div>
              <button type="button" className={styles.btn}>4</button>
              <button type="button" className={styles.btn}>5</button>
              <button type="button" className={styles.btn}>6</button>
              <button type="button" className={`${styles.btn} ${styles['btn-right']}`}>-</button>
            </div>
            <div>
              <button type="button" className={styles.btn}>1</button>
              <button type="button" className={styles.btn}>2</button>
              <button type="button" className={styles.btn}>3</button>
              <button type="button" className={`${styles.btn} ${styles['btn-right']}`}>+</button>
            </div>
            <div>
              <button type="button" className={`${styles.btn} ${styles['btn-expand']}`}>0</button>
              <button type="button" className={styles.btn}>.</button>
              <button type="button" className={`${styles.btn} ${styles['btn-right']}`}>=</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
