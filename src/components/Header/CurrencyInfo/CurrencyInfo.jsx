import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import './CurrencyInfo.css';
import { ListItem } from './Item/Item';

export const CurrencyInfo = ({ arr }) => {
  return (
    <ul>
      {arr.map(el => (
        <ListItem key={nanoid()} toBuy={el.currencyCodeA} cost={el.rateSell} />
      ))}
    </ul>
  );
};

CurrencyInfo.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      currencyCodeA: PropTypes.number.isRequired,
      currencyCodeB: PropTypes.number.isRequired,
      date: PropTypes.number.isRequired,
      rateSell: PropTypes.number.isRequired,
      rateBuy: PropTypes.number.isRequired,
      rateCross: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
