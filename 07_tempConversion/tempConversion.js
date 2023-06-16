const convertToCelsius = function (degree) {
  let convertedDegree = (degree - 32) * (5 / 9);
  convertedDegree = Math.round(convertedDegree * 10) / 10;
  return convertedDegree;
};

const convertToFahrenheit = function (degree) {
  let convertedDegree = degree * (9 / 5) + 32;
  convertedDegree = Math.round(convertedDegree * 10) / 10;
  return convertedDegree;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
