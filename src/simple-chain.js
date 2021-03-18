const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position >= this.chain.length || position < 0) {
      this.chain = [];
      throw new Error("error");
      
    }
    this.chain.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();

    return this;
  },
  finishChain() {
    const res = this.chain.join("~~");
    this.chain.splice(0, this.chain.length);

    return res;
  }
};

module.exports = chainMaker;
