import React from 'react';
import styles from '../stylesheets/Calculator.module.css';
import calculate from '../logic/calculate';

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

  handleClick = (e) => {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
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
              <button type="button" className={styles.btn} onClick={this.handleClick}>AC</button>
              <button type="button" className={styles.btn} onClick={this.handleClick}>+/-</button>
              <button type="button" className={styles.btn} onClick={this.handleClick}>%</button>
              <button type="button" className={`${styles.btn} ${styles['btn-right']}`} onClick={this.handleClick}>÷</button>
            </div>
            <div>
              <button type="button" className={styles.btn} onClick={this.handleClick}>7</button>
              <button type="button" className={styles.btn} onClick={this.handleClick}>8</button>
              <button type="button" className={styles.btn} onClick={this.handleClick}>9</button>
              <button type="button" className={`${styles.btn} ${styles['btn-right']}`} onClick={this.handleClick}>x</button>
            </div>
            <div>
              <button type="button" className={styles.btn} onClick={this.handleClick}>4</button>
              <button type="button" className={styles.btn} onClick={this.handleClick}>5</button>
              <button type="button" className={styles.btn} onClick={this.handleClick}>6</button>
              <button type="button" className={`${styles.btn} ${styles['btn-right']}`} onClick={this.handleClick}>-</button>
            </div>
            <div>
              <button type="button" className={styles.btn} onClick={this.handleClick}>1</button>
              <button type="button" className={styles.btn} onClick={this.handleClick}>2</button>
              <button type="button" className={styles.btn} onClick={this.handleClick}>3</button>
              <button type="button" className={`${styles.btn} ${styles['btn-right']}`} onClick={this.handleClick}>+</button>
            </div>
            <div>
              <button type="button" className={`${styles.btn} ${styles['btn-expand']}`} onClick={this.handleClick}>0</button>
              <button type="button" className={styles.btn} onClick={this.handleClick}>.</button>
              <button type="button" className={`${styles.btn} ${styles['btn-right']}`} onClick={this.handleClick}>=</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
