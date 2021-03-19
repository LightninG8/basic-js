const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }

    let newKey = "";

    while(newKey.length < message.length) {
      newKey = newKey + key
    }

    newKey = newKey.slice(0, message.length);

    // Подсчет
    let result = "";

    let keyI = 0;

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i].toUpperCase())) {
        result += message[i];
      } else {
        const messageLetterInd = this.alphabet.indexOf(message[i].toUpperCase());
        const newKeyLetterInd = this.alphabet.indexOf(newKey[keyI].toUpperCase());

        const letter = this.alphabet[(messageLetterInd + newKeyLetterInd) % this.alphabet.length];

        result += letter;
        keyI += 1;
      }
    }

    return this.type ? result : result.split("").reverse().join("");
  }    
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error();
    }

    let newKey = "";

    while(newKey.length < encryptedMessage.length) {
      newKey = newKey + key
    }

    newKey = newKey.slice(0, encryptedMessage.length);

    // Подсчет
    let result = "";

    let keyI = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!this.alphabet.includes(encryptedMessage[i].toUpperCase())) {
        result += encryptedMessage[i];
      } else {
        const messageLetterInd = this.alphabet.indexOf(encryptedMessage[i].toUpperCase());
        const newKeyLetterInd = this.alphabet.indexOf(newKey[keyI].toUpperCase());

        const letter = this.alphabet[(messageLetterInd - newKeyLetterInd + this.alphabet.length) % this.alphabet.length];

        result += letter;
        keyI += 1;
      }
    }

    return this.type ? result : result.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
