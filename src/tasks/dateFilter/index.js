export function dateFilter(startDate, endDate, transactionsData) {
  if (!Boolean(startDate) && !Boolean(endDate)) return transactionsData;
  return transactionsData.filter(transaction => {
    const transactionDate = new Date(transaction.date);
    if (startDate && new Date(startDate) > transactionDate) return false;
    if (endDate && new Date(endDate) < transactionDate) return false;
    return true;
  });
}
