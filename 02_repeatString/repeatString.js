const repeatString = function (string, num) {
  let result = '';
  let i = 0;
  if (num < 0) return 'ERROR';
  while (i < num) {
    i++;
    result += string;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
