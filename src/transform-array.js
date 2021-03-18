const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("error");
  }

  let result = [];


  for(let i = 0; i < arr.length; i++) {

    switch(arr[i]) {
      case "--discard-next":
        if (i < arr.length ) {
          i++
          
          if (arr[i + 1] == "--discard-prev" || arr[i + 1] == "--double-prev" ) {
            i++;
          }
        }
        break;
      case "--discard-prev":
        i !== 0 ? result.pop() : null;
        break;
      case "--double-next":
        i !== arr.length - 1 ?  result.push(arr[i + 1]) : null;
        break;
      case "--double-prev":
        i !== 0 ? result.push(arr[i - 1]) : null;
        break;
      default: 
        result.push(arr[i]);
    }
    
  
  }

  
  return result.filter(item => item != "--discard");
};
