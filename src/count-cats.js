const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;

  for (let item of matrix) {
    item.forEach(elem => {
      if (elem === '^^') result++;
    })
  }

  return result;
};
