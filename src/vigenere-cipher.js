const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    flag = true;
    constructor(command) {
        if (command === false) this.flag = false;
    }
    encrypt(decMessage, key) {
        if (decMessage === undefined || key === undefined) {
            throw new Error();
        }
        let ans = '';
        const message = decMessage.toUpperCase();
        const k = key.toUpperCase();
        for (let i = 1, j = 1; i <= message.length; i++) {
            let sym = message[i - 1];
            if (65 > sym.charCodeAt() || sym.charCodeAt() > 90) {
                ans += sym;
                continue;
            }
            ans += String.fromCharCode(((sym.charCodeAt() + k[j - 1].charCodeAt() - 130) % 26) + 65);
            if (j % key.length === 0) j = 0;
            j++;
        }
        return this.flag === true ? ans : ans.split('').reverse().join('');
    }

    decrypt(encMessage, key) {
        if (encMessage === undefined || key === undefined) {
            throw new Error();
        }
        let ans = '';
        const k = key.toUpperCase();
        for (let i = 1, j = 1; i <= encMessage.length; i++) {
            let encsym = encMessage[i - 1];
            if (65 > encsym.charCodeAt() || encsym.charCodeAt() > 90) {
                ans += encsym;
                continue;
            }
            ans += String.fromCharCode(((encsym.charCodeAt() - k[j - 1].charCodeAt() + 26) % 26) + 65);
            if (j % key.length === 0) j = 0;
            j++;
        }
        return this.flag === true ? ans : ans.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;