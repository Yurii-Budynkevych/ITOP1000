import PropTypes from 'prop-types';
import './Item.css';

export const ListItem = ({ toBuy, cost }) => {
  if (toBuy === 840) {
    return <li>USD: {cost.toFixed(2)} UAH</li>;
  }
  if (toBuy === 978) {
    return <li>EUR: {cost.toFixed(2)} UAH</li>;
  }
  return;
};

ListItem.propTypes = {
  toBuy: PropTypes.number.isRequired,
  cost: PropTypes.number.isRequired,
};
