/**
 * Formats IBAN
 *
 * @export
 * @param {string} iban
 * @returns string formattedIban
 */
export function formatIban(iban) {
  return `${iban.slice(0, 2)} ${iban.slice(2).replace(/(.{4})/g, '$1 ')}`;
}
