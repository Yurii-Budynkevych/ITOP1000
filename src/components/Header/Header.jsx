import { useEffect } from 'react';
import './Header.css';
import { getCurrentCurrencyPrice } from '../../services/bankAPI';
import { CurrencyInfo } from './CurrencyInfo/CurrencyInfo';

export const Header = () => {
  useEffect(() => {
    // const data = getCurrentCurrencyPrice();
  }, []);

  return (
    <header className="page-header">
      <CurrencyInfo />
    </header>
  );
};
