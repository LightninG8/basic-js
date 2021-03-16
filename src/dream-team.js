const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const newMembers = members.filter(item => typeof item === "string");
  const firstLetters = []; 

  newMembers.forEach(item => {
    firstLetters.push(item.trim()[0].toUpperCase()) 
  });

  const result = firstLetters.sort().join("");

  return result;
};
