const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(arr.filter(item => Array.isArray(item)).length != 0){
        return 1 + this.calculateDepth([].concat(...arr.filter(item => Array.isArray(item))));
    } else {
        return 1;
    }
    
  }
};
