import React from 'react';

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];

export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => (
  <div className="block">
    <ul className="currencies">
      {defaultCurrencies.map((cur) => (
        <li
          onClick={() => onChangeCurrency(cur)}
          className={currency === cur ? 'active' : ''}
          key={cur}>
          {cur}
        </li>
      ))}
    </ul>
    <input
      onChange={(e) => onChangeValue(e.target.value)}
      onClick = {(e) => e.target.select()}
      value={value}
      type="number"
      placeholder={0}
    />
  </div>
);
