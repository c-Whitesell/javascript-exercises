const removeFromArray = function (list, ...remove) {
  let newArr = [];
  list.forEach(removeItem);

  function removeItem(item) {
    if (!remove.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
