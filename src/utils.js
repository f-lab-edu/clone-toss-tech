export const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

export function formatDate(inputDate) {
  const year = inputDate.substring(0, 4);
  const month = inputDate.substring(4, 6);
  const day = inputDate.substring(6, 8);

  return `${year}. ${parseInt(month, 10)}. ${parseInt(day, 10)}`;
}
