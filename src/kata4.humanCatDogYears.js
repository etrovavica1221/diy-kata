const humanCatDogYears = number => {
  const arr = [];
  if (number === 1) {
    arr.push(1, 15, 15);
  } else if (number === 2) {
    arr.push(2, 24, 24);
  } else {
    const cat = (number - 2) * 4 + 24;
    const dog = (number - 2) * 5 + 24;
    arr.push(number, cat, dog);
  }

  return arr;
};

module.exports = humanCatDogYears;
