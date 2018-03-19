import React, { PureComponent } from 'react';
import { formatIban } from '../../../../tasks/formatIban';
import { DescriptionProvider } from '../../../../providers/DescriptionProvider';
import { Descrpition } from '../Description';

export class Transaction extends PureComponent {
  render() {
    const { transaction } = this.props;
    return (
      <div>
        <h3>{transaction.title}</h3>
        <span>{formatIban(transaction.iban)}</span>
        <DescriptionProvider
          transactionId={transaction.id}
          render={descriptionRenderProps => (
            <Descrpition {...descriptionRenderProps} />
          )}
        />
      </div>
    );
  }
}
