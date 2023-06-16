const sumAll = function (firstVal, SecondVal) {
  // create variable called sum that will hold the total sum
  let sum = 0;
  let argsMin = Math.min(firstVal, SecondVal);
  let argsMax = Math.max(firstVal, SecondVal);
  if (firstVal < 0 || SecondVal < 0) return 'ERROR';
  if (typeof firstVal !== 'number' || typeof SecondVal !== 'number')
    return 'ERROR';
  // create a while loop
  // initialize with i = to starting number
  let i = argsMin;
  // the condition will be when i <= the final number
  while (i <= argsMax) {
    // within the while loop we will add i to the sum using +=
    sum += i;
    // iteration will be incrementing i by 1
    i++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
