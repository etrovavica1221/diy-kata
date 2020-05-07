const joinNames = namesObj => {
  const namesArr = namesObj.map(obj => obj.name.toString());
  namesArr.pop();
  let namesString = "";

  for (let i = 0; i < namesArr.length; i++) {
    if (i === 0) {
      namesString += `${namesArr[i]},`;
      if (i === namesArr.length - 1) {
        namesString = namesArr[i];
      }
    } else if (i === namesArr.length - 1) {
      namesString += " " + namesArr[i];
    } else {
      namesString += ` ${namesArr[i]},`;
    }
  };
  const lastName = namesObj.pop().name;
  return `${namesString} & ${lastName}`;
};

module.exports = joinNames;
