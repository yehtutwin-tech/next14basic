export const formatCurrency = (num) =>
  num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
