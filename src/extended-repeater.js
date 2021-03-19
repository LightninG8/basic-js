const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 1, separator = "+", addition = "", additionRepeatTimes = 1, additionSeparator="|"}) {
  let additionArr = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    additionArr.push("" + addition);
  }

  const chain = "" + str + additionArr.join(additionSeparator);
  let chainArr = [];

  for (let i = 0; i < repeatTimes; i++) {
    chainArr.push(chain);
  }


  return chainArr.join(separator);
  
};
  