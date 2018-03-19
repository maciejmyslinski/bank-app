import React, { PureComponent } from 'react';
import { Form, FormSpy } from 'react-final-form';
import { TransactionsProvider } from '../../providers/TransactionsProvider';
import { Filter } from './components/Filter';
import { Transaction } from './components/Transaction';

export class Home extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h1>Your transactions history</h1>
        <Form
          onSubmit={() => {}}
          subscription={{}}
          render={() => (
            <React.Fragment>
              <Filter />
              <FormSpy
                subscription={{ values: true }}
                render={({ values }) => (
                  <TransactionsProvider
                    {...values}
                    render={({ transactions, couldLoadMore, loadMore }) => {
                      return (
                        <div>
                          {transactions &&
                            transactions.map(transaction => (
                              <Transaction
                                key={transaction.id}
                                transaction={transaction}
                              />
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
                )}
              />
            </React.Fragment>
          )}
        />
      </React.Fragment>
    );
  }
}
