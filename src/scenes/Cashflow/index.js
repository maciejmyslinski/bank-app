import React, { PureComponent } from 'react';
import { LineChart, Line } from 'recharts';
import { getBalancePerDay } from '../../tasks/getBalancePerDay';
import { transactions } from '../../services/data/transactions';

export class Cashflow extends PureComponent {
  render() {
    const balancePerDay = getBalancePerDay(transactions, 3000);
    return (
      <div>
        <h1>Cashflow</h1>
        <LineChart
          width={300}
          height={200}
          data={balancePerDay}
        >
          <Line dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>
    );
  }
}
