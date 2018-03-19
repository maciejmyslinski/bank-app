import { fetchDescription as fetchDescriptionApi } from '../../services/api';

export async function fetchDescription(transactionId) {
  try {
    const description = await fetchDescriptionApi(transactionId);
    return description;
  } catch (e) {
    return;
  }
}
