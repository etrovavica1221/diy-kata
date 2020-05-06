const numberToReversedDigits = number => {
  const str = number.toString();
  const spl = str.split('');
  const rev = spl.reverse();
  const arr = rev.map(ar => Number(ar));
  return arr;
};

module.exports = numberToReversedDigits;
