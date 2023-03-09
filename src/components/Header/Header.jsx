import { useEffect, useState } from 'react';
import './Header.css';
import { getCurrentCurrencyPrice } from '../../services/bankAPI';
import { CurrencyInfo } from './CurrencyInfo/CurrencyInfo';

const DEFAULT = [
  {
    currencyCodeA: 840,
    currencyCodeB: 980,
    date: 0,
    rateSell: 0,
    rateBuy: 0,
    rateCross: 0,
  },
  {
    currencyCodeA: 978,
    currencyCodeB: 980,
    date: 0,
    rateSell: 0,
    rateBuy: 0,
    rateCross: 0,
  },
];

export const Header = () => {
  const [data, setData] = useState(DEFAULT);

  useEffect(() => {
    getCurrentCurrencyPrice().then(res => setData(res));
  }, []);

  return (
    <header className="page-header">
      <CurrencyInfo arr={data} />
    </header>
  );
};
