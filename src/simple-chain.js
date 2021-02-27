const CustomError = require("../extensions/custom-error");


const chainMaker = {
    arr: [],
    getLength() {
        return this.arr.length;
    },
    addLink(value = '( )') {
        this.arr.push(value);
        return this;
    },
    removeLink(position) {
        if (!isNaN(position) && position > 0 && position <= this.arr.length) {
            this.arr.splice(position - 1, 1);
            return this;
        } else {
            this.arr = [];
            throw new Error();
        }
    },
    reverseChain() {
        this.arr = this.arr.reverse();
        return this;

    },
    finishChain() {
        let chain = "";
        for (let link of this.arr) {
            chain += `( ${link} )~~`;
        }
        this.arr = [];
        return chain.slice(0, -2);
    }
};
module.exports = chainMaker;