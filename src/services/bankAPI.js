import axios from 'axios';
axios.defaults.baseURL = 'https://api.monobank.ua/';

export const getCurrentCurrencyPrice = async () => {
  // const res = await axios.get(`/bank/currency`);

  // const data = res.data.filter(
  //   element => element.currencyCodeA === 840 || element.currencyCodeA === 978
  // );
  // const filteredByUAHData = data.filter(el => el.currencyCodeB === 980);
  // return filteredByUAHData;
  return [
    {
      currencyCodeA: 840,
      currencyCodeB: 980,
      date: 1678399274,
      rateBuy: 36.65,
      rateCross: 0,
      rateSell: 37.4406,
    },
    {
      currencyCodeA: 978,
      currencyCodeB: 980,
      date: 1678399274,
      rateBuy: 38.8,
      rateCross: 0,
      rateSell: 39.8995,
    },
  ];
};
