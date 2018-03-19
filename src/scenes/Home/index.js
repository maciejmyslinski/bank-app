import React, { PureComponent } from 'react';
import { TransactionsProvider } from '../../providers/TransactionsProvider';
import { Filter } from './components/Filter';
import { DescriptionProvider } from '../../providers/DescriptionProvider';

export class Home extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1>Your transactions history</h1>
        <Filter />
        <TransactionsProvider
          render={({ transactions, couldLoadMore, loadMore }) => {
            return (
              <div>
                {transactions &&
                  transactions.map(transaction => (
                    <div key={transaction.id}>
                      <h3>{transaction.title}</h3>
                      <DescriptionProvider
                        transactionId={transaction.id}
                        render={({
                          loading,
                          error,
                          description,
                          fetchDescription
                        }) => {
                          if (loading) return <p>loading...</p>;
                          if (error) return <p>error</p>;
                          if (description) return <p>{description}</p>;
                          return (
                            <button type="button" onClick={fetchDescription}>
                              show description
                            </button>
                          );
                        }}
                      />
                    </div>
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
