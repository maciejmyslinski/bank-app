import React, { PureComponent } from 'react';
import { TransactionsProvider } from '../../providers/TransactionsProvider';

export class Home extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1>Your transactions history</h1>
        <TransactionsProvider
          render={transactions => {
            return (
              (transactions &&
                transactions.map(transaction => (
                  <div key={transaction.id}>{transaction.title}</div>
                ))) ||
              null
            );
          }}
        />
      </React.Fragment>
    );
  }
}
