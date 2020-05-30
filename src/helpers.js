export const displayUSD = (amount) => {
  const [dollars, cents] =  amount.toFixed(2).split('.');
  const commaSeparatedAmount = dollars.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  return `$${commaSeparatedAmount}.${cents}`;
} 