const cleanEmptyObjectKeys = (obj) => {
  for (let propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === ""
    ) {
      delete obj[propName];
    }
  }
  return obj;
};

module.exports = cleanEmptyObjectKeys;
