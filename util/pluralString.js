const pluralString = (amount, type) => (
  amount > 1
    ? `${amount} ${type}s`
    : `${amount} ${type}`
);

export default pluralString;
