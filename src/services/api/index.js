import { descriptions } from '../data/descriptions';

export function fetchDescription(transactionId) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const description = descriptions.find(
        description => description.id === transactionId
      );
      if (!Boolean(description)) throw new Error('no description');
      resolve(description.description);
    }, 500)
  );
}
