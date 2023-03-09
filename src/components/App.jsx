import { useEffect, useState } from 'react';
import './App.css';
import { getCurrentCurrencyPrice } from '../services/bankAPI';
import { Header } from './Header/Header';
import { MainPage } from '../pages/MainPage';

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

export const App = () => {
  const [data, setData] = useState(DEFAULT);

  useEffect(() => {
    getCurrentCurrencyPrice().then(res => setData(res));
  }, []);

  return (
    <>
      <Header arr={data} />
      <MainPage arr={data} />
    </>
  );
};
