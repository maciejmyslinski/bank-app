import { Component } from 'react';
import { transactions } from '../../services/data/transactions';
import { paginator } from '../../tasks/paginator';
import { search } from '../../tasks/search';

export class TransactionsProvider extends Component {
  constructor(props) {
    super(props);
    const data = search(transactions, this.props.searchPhrase);
    this.generator = paginator(data);
    const initialTransactions = this.generator.next();

    // if paginator is implemented
    if (initialTransactions.value) {
      this.state = {
        transactions: initialTransactions.value,
        couldLoadMore: !initialTransactions.done
      };
    } else {
      this.state = {
        transactions: transactions,
        couldLoadMore: false
      };
    }
  }

  loadMore = () =>
    this.state.couldLoadMore &&
    this.setState(state => {
      const nextTransactions = this.generator.next();
      return {
        transactions: [
          ...state.transactions,
          ...(nextTransactions.value || [])
        ],
        couldLoadMore: !nextTransactions.done
      };
    });

  render() {
    return this.props.render({
      transactions: this.state.transactions,
      loadMore: this.loadMore,
      couldLoadMore: this.state.couldLoadMore
    });
  }
}
