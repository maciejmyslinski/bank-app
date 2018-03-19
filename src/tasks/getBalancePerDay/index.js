// you must not mutate transactinsData
export function getBalancePerDay(transactionsData, initialBalance = 0) {
  const dayRecord = transactionsData
    .reduce((acc, transaction) => {
      let date = new Date(transaction.date);
      date.setHours(0, 0, 0, 0);
      date = date.toISOString();
      const dayIndex = acc.findIndex(day => day.name === date);
      if (dayIndex >= 0) {
        acc[dayIndex] = {
          name: date,
          value: add(acc[dayIndex].value, transaction.amount)
        };
        return acc;
      }
      return [
        ...acc,
        {
          name: date,
          value: transaction.amount
        }
      ];
    }, [])
    .sort((a, b) => a.name > b.name)
    .map((day, i, arr) => ({
      ...day,
      value: add(day.value, i === 0 ? initialBalance : arr[i - 1].value)
    }));
  return dayRecord;
}

export function add(x = 0, y = 0) {
  return (x * 100 + y * 100) / 100;
}
