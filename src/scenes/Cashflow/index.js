import React, { PureComponent } from 'react';
import { getBalancePerDay } from '../../tasks/getBalancePerDay';
import { transactions } from '../../services/data/transactions';

export class Cashflow extends PureComponent {
  render() {
    const balancePerDay = getBalancePerDay(transactions, 3000);
    return (
      <div>
        <h1>Cashflow</h1>
        {Object.keys(balancePerDay).map(day => (
          <p key={day}>
            <b>{day}:</b>
            {balancePerDay[day]}
          </p>
        ))}
      </div>
    );
  }
}
