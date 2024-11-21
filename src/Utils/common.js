export const numberFormatter = (number) => {
  let formatted = (number / 10000000).toFixed(2);
  return formatted;
};
