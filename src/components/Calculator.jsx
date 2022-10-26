import React from 'react';
import '../stylesheets/Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <section className="calculator">
        <div className="container">
          <div className="display">
            <p>0</p>
          </div>
          <div className="keys">
            <div>
              <button type="button" className="btn">AC</button>
              <button type="button" className="btn">+/-</button>
              <button type="button" className="btn">%</button>
              <button type="button" className="btn btn-right">/</button>
            </div>
            <div>
              <button type="button" className="btn">7</button>
              <button type="button" className="btn">8</button>
              <button type="button" className="btn">9</button>
              <button type="button" className="btn btn-right">x</button>
            </div>
            <div>
              <button type="button" className="btn">4</button>
              <button type="button" className="btn">5</button>
              <button type="button" className="btn">6</button>
              <button type="button" className="btn btn-right">-</button>
            </div>
            <div>
              <button type="button" className="btn">1</button>
              <button type="button" className="btn">2</button>
              <button type="button" className="btn">3</button>
              <button type="button" className="btn btn-right">+</button>
            </div>
            <div>
              <button type="button" className="btn btn-expand">0</button>
              <button type="button" className="btn">.</button>
              <button type="button" className="btn btn-right">=</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
