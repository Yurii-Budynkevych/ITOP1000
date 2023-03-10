import { useState, useEffect } from 'react';
import './Calculator.css';

const DEFAULT = 0;
const DEFAULT_CURRENCY_ONE = 'USD';
const DEFAULT_CURRENCY_TWO = 'UAH';

export const Calculator = ({ arr }) => {
  const [firstCurrency, setfirstCurrency] = useState(DEFAULT_CURRENCY_ONE);
  const [secondCurrency, setsecondCurrency] = useState(DEFAULT_CURRENCY_TWO);
  const [from, setFrom] = useState(DEFAULT);
  const [to, setTo] = useState(DEFAULT);

  const usd = arr.find(el => el.currencyCodeA === 840);
  const eur = arr.find(el => el.currencyCodeA === 978);
  const usdPrice = usd.rateSell;
  const eurPrice = eur.rateSell;

  const selctChanger = e => {
    setfirstCurrency(e.currentTarget.value);
  };

  const secondSelctChanger = e => {
    setsecondCurrency(e.currentTarget.value);
  };

  const inputChanger = e => {
    setFrom(e.currentTarget.value);
  };
  const secondInputChanger = e => {
    setTo(e.currentTarget.value);
  };

  useEffect(() => {
    switch (firstCurrency === 'USD') {
      case secondCurrency === 'UAH':
        setTo(from * usdPrice);
        break;

      case secondCurrency === 'EUR':
        setTo(usdPrice / eurPrice);
        break;

      case secondCurrency === 'USD':
        setTo(from);
        break;

      default:
        setTo(0);
        break;
    }
  }, [usdPrice, eurPrice, firstCurrency, secondCurrency, from]);

  return (
    <div className="calculator">
      <h1 className="calculator__title">Super cool currency calculator</h1>
      <label>
        From
        <select onChange={selctChanger} name="from" defaultValue="USD">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
        <input
          value={from}
          onChange={inputChanger}
          type="number"
          min="0"
          name="cuerrencyFrom"
          placeholder="0"
          className="calculator__input"
        />
      </label>

      <label>
        To
        <select onChange={secondSelctChanger} name="to" defaultValue="UAH">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
        <input
          value={to}
          onChange={secondInputChanger}
          type="number"
          min="0"
          name="cuerrencyTo"
          placeholder="0"
          className="calculator__input"
        />
      </label>
    </div>
  );
};
