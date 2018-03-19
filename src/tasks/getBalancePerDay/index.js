// you must not mutate transactinsData
export function getBalancePerDay(transactionsData, initialBalance = 0) {
  const dayRecord = transactionsData.reduce((acc, transaction) => {
    const date = new Date(transaction.date);
    date.setHours(0, 0, 0, 0);
    return (acc = {
      ...acc,
      [date]: add(acc[date], transaction.amount)
    });
  }, {});
  return Object.keys(dayRecord).reduce((acc, day, i) => {
    if (i === 0) {
      return {
        ...acc,
        [day]: add(initialBalance, dayRecord[day])
      };
    }
    return {
      ...acc,
      [day]: add(acc[Object.keys(dayRecord)[i - 1]], dayRecord[day])
    };
  }, {});
}

export function add(x = 0, y = 0) {
  return (x * 100 + y * 100) / 100;
}
