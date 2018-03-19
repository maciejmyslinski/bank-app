import { Component } from 'react';
import { transactions } from '../../services/data/transactions';
import { paginator } from '../../tasks/paginator';
import { search } from '../../tasks/search';
import { dateFilter } from '../../tasks/dateFilter';

export class TransactionsProvider extends Component {
  constructor(props) {
    super(props);
    let data = search(transactions, this.props.searchPhrase);
    data = dateFilter(this.props.startDate, this.props.endDate, data);
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

  componentWillReceiveProps = nextProps => {
    let data = search(transactions, nextProps.searchPhrase);
    data = dateFilter(nextProps.startDate, nextProps.endDate, data);
    this.generator = paginator(data);
    const initialTransactions = this.generator.next();

    // if paginator is implemented
    if (initialTransactions.value || (data && !data.length)) {
      this.setState({
        transactions: initialTransactions.value,
        couldLoadMore: !initialTransactions.done
      });
    } else {
      this.setState({
        transactions: transactions,
        couldLoadMore: false
      });
    }
  };

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
