import React, { PureComponent } from 'react';
import { TransactionsProvider } from '../../providers/TransactionsProvider';
import { Filter } from './components/Filter';

export class Home extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1>Your transactions history</h1>
        <Filter />
        <TransactionsProvider
          searchPhrase="odi"
          render={({ transactions, couldLoadMore, loadMore }) => {
            return (
              <div>
                {transactions &&
                  transactions.map(transaction => (
                    <div key={transaction.id}>{transaction.title}</div>
                  ))}
                {couldLoadMore && (
                  <button type="button" onClick={loadMore}>
                    Load more
                  </button>
                )}
              </div>
            );
          }}
        />
      </React.Fragment>
    );
  }
}
