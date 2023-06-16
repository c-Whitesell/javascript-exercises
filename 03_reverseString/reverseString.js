const reverseString = function (string) {
  // create an empty to hold reversed string
  let reverse = [];
  // create a array containing the split string
  const split = string.split('');
  // create a loop that starts at zero and end with i < the length of 'split' incrementing by 1
  for (let i = 0; i < split.length; i++) {
    reverse.unshift(split[i]);
  }
  return reverse.join('');
  // take the arrays in split and going in order add them to the front of the reversed array
};

// Do not edit below this line
module.exports = reverseString;
