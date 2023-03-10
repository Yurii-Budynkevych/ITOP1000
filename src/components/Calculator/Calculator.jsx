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
    if (firstCurrency === 'USD' && secondCurrency === 'UAH') {
      setTo(from * usdPrice);
    }
    if (firstCurrency === 'USD' && secondCurrency === 'EUR') {
      setTo((from * usdPrice) / eurPrice);
    }
    if (firstCurrency === 'USD' && secondCurrency === 'USD') {
      setTo(from);
    }
    //
    if (firstCurrency === 'EUR' && secondCurrency === 'UAH') {
      setTo(from * eurPrice);
    }
    if (firstCurrency === 'EUR' && secondCurrency === 'EUR') {
      setTo(from);
    }
    if (firstCurrency === 'EUR' && secondCurrency === 'USD') {
      setTo((from * eurPrice) / usdPrice);
    }
    //
    if (firstCurrency === 'UAH' && secondCurrency === 'UAH') {
      setTo(from);
    }
    if (firstCurrency === 'UAH' && secondCurrency === 'EUR') {
      setTo(from * eurPrice);
    }
    if (firstCurrency === 'UAH' && secondCurrency === 'USD') {
      setTo(from * usdPrice);
    }
  }, [usdPrice, eurPrice, firstCurrency, secondCurrency, from, to]);
  // // ///////////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   if (firstCurrency === 'USD' && secondCurrency === 'UAH') {
  //     setFrom(to * usdPrice);
  //   }
  //   if (firstCurrency === 'USD' && secondCurrency === 'EUR') {
  //     setFrom((to * usdPrice) / eurPrice);
  //   }
  //   if (firstCurrency === 'USD' && secondCurrency === 'USD') {
  //     setFrom(to);
  //   }
  //   //
  //   if (firstCurrency === 'EUR' && secondCurrency === 'UAH') {
  //     setFrom(to * eurPrice);
  //   }
  //   if (firstCurrency === 'EUR' && secondCurrency === 'EUR') {
  //     setFrom(to);
  //   }
  //   if (firstCurrency === 'EUR' && secondCurrency === 'USD') {
  //     setFrom((to * eurPrice) / usdPrice);
  //   }
  //   //
  //   if (firstCurrency === 'UAH' && secondCurrency === 'UAH') {
  //     setFrom(to);
  //   }
  //   if (firstCurrency === 'UAH' && secondCurrency === 'EUR') {
  //     setFrom(to * eurPrice);
  //   }
  //   if (firstCurrency === 'UAH' && secondCurrency === 'USD') {
  //     setFrom(to * usdPrice);
  //   }
  // }, [usdPrice, eurPrice, firstCurrency, secondCurrency, to]);

  return (
    <div className="calculator">
      <h1 className="calculator__title">Super cool currency calculator</h1>
      <div>
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
      </div>

      <div>
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
      </div>
    </div>
  );
};
