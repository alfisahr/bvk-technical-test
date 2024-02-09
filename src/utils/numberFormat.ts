const numberFormat = (n: string) => {
  const num = parseInt(n);
  const thousandSeparator = num.toLocaleString("en-US");
  return `$${thousandSeparator}`;
};

export default numberFormat;
