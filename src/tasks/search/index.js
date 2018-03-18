export function search(transactionsList, searchPhrase) {
  if (!Boolean(searchPhrase)) return transactionsList;
  const regularExpression = new RegExp(searchPhrase);
  return transactionsList.filter(transaction =>
    regularExpression.test(transaction.title)
  );
}
