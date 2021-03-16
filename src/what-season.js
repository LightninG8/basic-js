const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  const month = Date.prototype.getMonth.call(date);

  let result = "";

  if (month <= 1 || month >= 11) {
    result = "winter";
  } else if (month >= 2 && month <= 4) {
    result = "spring";
  } else if (month >= 5 && month <= 7) {
    result = "summer";
  } else if (month >= 8 && month <= 10) {
    result = "autumn";
  } else {
    throw new Error('Unable to determine the time of year!');
  }

  return result;
};
