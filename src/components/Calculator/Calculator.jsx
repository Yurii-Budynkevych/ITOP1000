import { useState } from 'react';
import './Calculator.css';

const DEFAULT = 0;

export const Calculator = ({ arr }) => {
  const [currentResult, setcurrentResult] = useState(DEFAULT);
  const usdPrice = 102;
  const eurPrice = 122;

  const submitHandler = e => {
    e.preventDefault();
    const from = e.target.from.value;
    const fromAmount = e.target.cuerrencyFrom.value;
    const to = e.target.to.value;
    const toAmount = e.target.cuerrencyTo.value;

    switch (from === 'USD') {
      case to === 'UAH':
        setcurrentResult(usdPrice);
        break;

      default:
        break;
    }
  };

  return (
    <form onSubmit={submitHandler} className="calculator">
      <h1 className="calculator__title">Super cool currency calculator</h1>
      <label>
        From
        <select name="from" defaultValue="USD">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
        <input type="number" name="cuerrencyFrom" />
      </label>

      <label>
        To
        <select name="to" defaultValue="UAH">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
        <input type="number" name="cuerrencyTo" />
      </label>

      <button type="submit">Calculate!</button>

      <strong>Result: {currentResult}</strong>
    </form>
  );
};
