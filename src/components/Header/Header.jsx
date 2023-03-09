import './Header.css';
import { CurrencyInfo } from './CurrencyInfo/CurrencyInfo';

export const Header = ({ arr }) => {
  return (
    <header className="page-header">
      <CurrencyInfo arr={arr} />
    </header>
  );
};
