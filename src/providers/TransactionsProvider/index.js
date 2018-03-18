import { Component } from 'react';
import { transactions } from '../../services/data/transactions';

export class TransactionsProvider extends Component {
  render() {
    return this.props.render(transactions);
  }
}
